import metroExodus from '../gametiles/metro-exodus.jpg';
import theWalkingDead from '../gametiles/walking-dead.jpg';
import theOuterWorlds from '../gametiles/the-outer-worlds.jpg';
import untitledGooseGame from '../gametiles/untitled-goose-game.jpg';
import whatTheGolf from '../gametiles/what-the-golf.jpg';


export const games = [
	{
		name: 'Metro Exodus',
		image: metroExodus,
		epicRelease: new Date(2019, 1, 15),
		steamRelease: new Date(2020, 1, 15),
		xboxRelease: new Date(2019, 1, 15),
		epicLink: 'https://www.epicgames.com/store/en-US/product/metro-exodus/home',
		steamLink: 'https://store.steampowered.com/app/412020/Metro_Exodus/',
		xboxLink: 'https://www.microsoft.com/p/metro-exodus-windows/9p60kl3mhcnh'
	},
	{
		name: 'The Walking Dead: The Final Season',
		image: theWalkingDead,
		epicRelease: new Date(2019, 0, 15),
		steamRelease: new Date(2020, 0, 15),
		epicLink: 'https://www.epicgames.com/store/en-US/product/walking-dead-final-season/home',
		steamLink: 'https://store.steampowered.com/app/866800/The_Walking_Dead_The_Final_Season/'
	},
	{
		name: 'The Outer Worlds',
		image: theOuterWorlds,
		epicRelease: new Date(2019, 9, 25),
		steamRelease: new Date(2020, 9, 25),
		xboxRelease: new Date(2019, 9, 25),
		epicLink: 'https://www.epicgames.com/store/en-US/product/the-outer-worlds/home',
		steamLink: 'https://store.steampowered.com/app/578650/The_Outer_Worlds/',
		xboxLink: 'https://www.microsoft.com/p/the-outer-worlds/9mwd2z8l1fbq'
	},
	{
		name: 'Untitled Goose Game',
		image: untitledGooseGame,
		epicRelease: 'Unknown',
		steamRelease: 'Unknown',
		epicLink: 'https://www.epicgames.com/store/en-US/product/untitled-goose-game/home',
		steamLink: 'https://store.steampowered.com/app/837470/Untitled_Goose_Game/'
	},
	{
		name: 'WHAT THE GOLF?',
		image: whatTheGolf,
		epicRelease: 'Unknown',
		steamRelease: 'Unknown',
		epicLink: 'https://www.epicgames.com/store/en-US/product/what-the-golf/home',
		steamLink: 'https://store.steampowered.com/app/785790/WHAT_THE_GOLF/'
	}
];
