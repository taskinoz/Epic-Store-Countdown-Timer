import { describe, expect, it } from 'vitest';
import { renderToString } from 'react-dom/server';
import App from './App';
import rawGames from './data/games.json';
import { games, parseRelease } from './data/games';
import { parseSteamDate, updateGames } from '../scripts/update-games';

describe('App', () => {
	it('renders every game', () => {
		const html = renderToString(<App />);
		for (const game of games) {
			expect(html).toContain(game.name.replace('&', '&amp;'));
		}
	});
});

describe('games.json', () => {
	it('has the required fields and valid dates', () => {
		for (const game of rawGames) {
			expect(game.name).toBeTruthy();
			expect(game.epicLink).toMatch(/^https:\/\//);
			expect(game.steamLink).toMatch(/^https:\/\//);
			for (const key of ['epicRelease', 'steamRelease', 'xboxRelease']) {
				const release = parseRelease(game[key]);
				if (release instanceof Date) {
					expect(Number.isNaN(release.getTime()), `${game.name} ${key}`).toBe(false);
				}
			}
		}
	});

	it('has unique names and Steam app ids', () => {
		expect(new Set(rawGames.map((game) => game.name)).size).toBe(rawGames.length);
		const ids = rawGames.map((game) => game.steamAppId).filter(Boolean);
		expect(new Set(ids).size).toBe(ids.length);
	});
});

describe('parseSteamDate', () => {
	it.each([
		['25 May, 2021', '2021-05-25'],
		['May 25, 2021', '2021-05-25'],
		['1 Mar, 2021', '2021-03-01'],
		['Coming soon', 'TBA'],
		['', 'TBA'],
		['Q3 2027', 'Q3 2027'],
		['2027', '2027']
	])('%s -> %s', (input, expected) => {
		expect(parseSteamDate(input)).toBe(expected);
	});
});

describe('updateGames', () => {
	it('updates changed dates and skips failures', async () => {
		const list = [
			{ name: 'A', steamAppId: 1, steamRelease: 'TBA' },
			{ name: 'B', steamAppId: 2, steamRelease: '2021-01-01' },
			{ name: 'C', steamRelease: 'TBA' }
		];
		const fetchDetails = async (id) => {
			if (id === 2) {
				throw new Error('nope');
			}
			return { release_date: { coming_soon: false, date: '4 Jul, 2027' } };
		};
		const changes = await updateGames(list, fetchDetails, 0);
		expect(changes).toEqual(['A: TBA -> 2027-07-04']);
		expect(list.map((game) => game.steamRelease)).toEqual(['2027-07-04', '2021-01-01', 'TBA']);
	});
});
