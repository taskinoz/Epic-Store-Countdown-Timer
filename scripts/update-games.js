// Refreshes Steam release dates in src/data/games.json from the Steam store API.
//
//   npm run update-games                      update every game that has a steamAppId
//   npm run update-games -- --add <steamAppId> --epic <YYYY-MM-DD> [--epic-link <url>]
//                                             add a new Epic exclusive using its Steam page
//
// The Steam appdetails endpoint is public and needs no API key, but it blocks
// browser CORS requests, so the site reads the committed JSON instead of calling it live.

import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

const GAMES_FILE = new URL('../src/data/games.json', import.meta.url);
const APPDETAILS = 'https://store.steampowered.com/api/appdetails';

const MONTHS = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];

const pad = (n) => String(n).padStart(2, '0');

// Steam gives "25 May, 2021", "May 25, 2021", "Q3 2027", "2027" or "Coming soon".
// Exact dates become YYYY-MM-DD, anything vaguer is kept as display text.
export const parseSteamDate = (text) => {
	const value = (text ?? '').trim();
	if (!value || /^(coming soon|to be announced|tba)$/i.test(value)) {
		return 'TBA';
	}
	const dayFirst = /^(\d{1,2}) ([a-z]+),? (\d{4})$/i.exec(value);
	const monthFirst = /^([a-z]+) (\d{1,2}),? (\d{4})$/i.exec(value);
	const [day, monthName, year] = dayFirst
		? [dayFirst[1], dayFirst[2], dayFirst[3]]
		: monthFirst
			? [monthFirst[2], monthFirst[1], monthFirst[3]]
			: [];
	const month = MONTHS.indexOf(monthName?.slice(0, 3).toLowerCase());
	if (month === -1) {
		return value;
	}
	return `${year}-${pad(month + 1)}-${pad(day)}`;
};

const fetchAppDetails = async (appId) => {
	const url = `${APPDETAILS}?appids=${appId}&cc=us&l=english`;
	const response = await fetch(url, { headers: { 'User-Agent': 'epic-store-countdown-timer' } });
	if (!response.ok) {
		throw new Error(`HTTP ${response.status}`);
	}
	const body = await response.json();
	const entry = body?.[appId];
	if (!entry?.success) {
		throw new Error('Steam returned no data (delisted or region locked?)');
	}
	return entry.data;
};

// Steam rate limits appdetails to roughly 200 requests per 5 minutes
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const updateGames = async (games, fetchDetails = fetchAppDetails, delay = 1500) => {
	const changes = [];
	for (const [index, game] of games.entries()) {
		if (!game.steamAppId) {
			continue;
		}
		if (index > 0) {
			await sleep(delay);
		}
		try {
			const data = await fetchDetails(game.steamAppId);
			const steamRelease = parseSteamDate(data.release_date?.date);
			if (steamRelease !== game.steamRelease) {
				changes.push(`${game.name}: ${game.steamRelease} -> ${steamRelease}`);
				game.steamRelease = steamRelease;
			}
		} catch (error) {
			console.warn(`Skipping ${game.name} (${game.steamAppId}): ${error.message}`);
		}
	}
	return changes;
};

const slugify = (name) => name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

const addGame = async (games, args) => {
	const appId = Number(args['--add']);
	const epicRelease = args['--epic'];
	if (!appId || !/^\d{4}-\d{2}-\d{2}$/.test(epicRelease ?? '')) {
		throw new Error('Usage: --add <steamAppId> --epic <YYYY-MM-DD> [--epic-link <url>]');
	}
	if (games.some((game) => game.steamAppId === appId)) {
		throw new Error(`Steam app ${appId} is already in the list`);
	}
	const data = await fetchAppDetails(appId);
	const game = {
		name: data.name,
		steamAppId: appId,
		epicRelease,
		steamRelease: parseSteamDate(data.release_date?.date),
		epicLink: args['--epic-link'] ?? `https://store.epicgames.com/en-US/p/${slugify(data.name)}`,
		steamLink: `https://store.steampowered.com/app/${appId}/`
	};
	games.push(game);
	return [`Added ${game.name} (Epic ${game.epicRelease}, Steam ${game.steamRelease})`];
};

const parseArgs = (argv) => {
	const args = {};
	for (let i = 0; i < argv.length; i += 2) {
		args[argv[i]] = argv[i + 1];
	}
	return args;
};

const main = async () => {
	const games = JSON.parse(await readFile(GAMES_FILE, 'utf8'));
	const args = parseArgs(process.argv.slice(2));
	const changes = args['--add'] ? await addGame(games, args) : await updateGames(games);
	if (changes.length === 0) {
		console.log('No changes.');
		return;
	}
	await writeFile(GAMES_FILE, JSON.stringify(games, null, '\t') + '\n');
	console.log(changes.join('\n'));
};

if (process.argv[1] === fileURLToPath(import.meta.url)) {
	main().catch((error) => {
		console.error(error.message);
		process.exit(1);
	});
}
