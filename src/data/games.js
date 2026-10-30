import rawGames from './games.json';

// Local tiles keyed by filename, e.g. { 'ashen.jpg': '/assets/ashen-abc123.jpg' }
const tiles = Object.fromEntries(
	Object.entries(import.meta.glob('../gametiles/*', { eager: true, import: 'default' }))
		.map(([path, url]) => [path.split('/').pop(), url])
);

// "YYYY-MM-DD" becomes a local Date, anything else ("TBA", "2027") stays a string
export const parseRelease = (value) => {
	const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(value ?? '');
	if (!match) {
		return value;
	}
	return new Date(Number(match[1]), Number(match[2]) - 1, Number(match[3]));
};

export const isReleased = (release, now = new Date()) =>
	release instanceof Date && release <= now;

const steamHeader = (appId) =>
	`https://cdn.cloudflare.steamstatic.com/steam/apps/${appId}/header.jpg`;

export const games = rawGames.map((game) => ({
	...game,
	image: tiles[game.image] ?? (game.steamAppId ? steamHeader(game.steamAppId) : undefined),
	epicRelease: parseRelease(game.epicRelease),
	steamRelease: parseRelease(game.steamRelease),
	xboxRelease: parseRelease(game.xboxRelease)
}));
