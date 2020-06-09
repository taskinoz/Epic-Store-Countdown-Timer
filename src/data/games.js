import metroExodus from '../gametiles/metro-exodus.jpg';
import theWalkingDead from '../gametiles/walking-dead.jpg';
import theOuterWorlds from '../gametiles/the-outer-worlds.jpg';
import untitledGooseGame from '../gametiles/untitled-goose-game.jpg';
import whatTheGolf from '../gametiles/what-the-golf.jpg';
import ashen from '../gametiles/ashen.jpg';
import superMeatBoyForever from '../gametiles/super-meat-boy-forever.jpg';
import operenciaTheStolenSun from '../gametiles/operencia-the-stolen-sun.jpg';
import maneater from '../gametiles/maneater.jpg';
import borderlands3 from '../gametiles/borderlands-3.jpg';
import outerWilds from '../gametiles/outer-wilds.jpg';
import control from '../gametiles/control.jpg';
import satisfactory from '../gametiles/satisfactory.jpg';

export const games = [
	{
		name: 'Ashen',
		image: ashen,
		epicRelease: new Date(2018, 11, 7),
		steamRelease: new Date(2019, 11, 9),
		epicLink: 'https://www.epicgames.com/store/en-US/product/ashen/home',
		steamLink: 'https://store.steampowered.com/app/649950/Ashen/'
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
		name: 'Borderlands 3',
		image: borderlands3,
		epicRelease: new Date(2019, 8, 13),
		steamRelease: new Date(2020,2,13),
		epicLink: 'https://epicgames.com/store/en-US/product/borderlands-3/home',
		steamLink: 'https://store.steampowered.com/app/397540/Borderlands_3/'
	},
	{
		name: 'Outer Wilds',
		image: outerWilds,
		epicRelease: new Date(2019, 4, 30),
		steamRelease: new Date(2020, 5, 18),
		epicLink: 'https://www.epicgames.com/store/en-US/product/outerwilds/home',
		steamLink: 'https://store.steampowered.com/app/753640/Outer_Wilds/'
	},
	{
		name: 'Control',
		image: control,
		epicRelease: new Date(2019,7,28),
		steamRelease: new Date(2020,7,28),
		epicLink: 'https://www.epicgames.com/store/en-US/product/control/home',
		steamLink: 'https://store.steampowered.com/app/870780/Control/'
	},
	{
		name: 'Untitled Goose Game',
		image: untitledGooseGame,
		epicRelease: new Date(2019, 8, 20),
		steamRelease: new Date(2020, 8, 20),
		epicLink: 'https://www.epicgames.com/store/en-US/product/untitled-goose-game/home',
		steamLink: 'https://store.steampowered.com/app/837470/Untitled_Goose_Game/'
	},
	{
		name: 'WHAT THE GOLF?',
		image: whatTheGolf,
		epicRelease: new Date(2019,9,1),
		steamRelease: new Date(2020,9,1),
		epicLink: 'https://www.epicgames.com/store/en-US/product/what-the-golf/home',
		steamLink: 'https://store.steampowered.com/app/785790/WHAT_THE_GOLF/'
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
		name: 'Operencia: The Stolen Sun',
		image: operenciaTheStolenSun,
		epicRelease: new Date(2019, 2, 29),
		steamRelease: new Date(2020, 2, 31),
		xboxRelease: new Date(2019, 2, 29),
		epicLink: 'https://www.epicgames.com/store/en-US/product/operencia/home',
		steamLink: 'https://store.steampowered.com/app/985950/Operencia_The_Stolen_Sun/',
		xboxLink: 'https://www.microsoft.com/en-au/p/operencia-the-stolen-sun/9pfkkz5t89nl'
	},
	{
		name: 'Maneater',
		image: maneater,
		epicRelease: new Date(2020, 4, 23),
		steamRelease: 'Unknown',
		epicLink: 'https://www.epicgames.com/store/en-US/product/maneater/home',
		steamLink: 'https://store.steampowered.com/app/629820/Maneater/'
	},
	{
		name: 'Super Meat Boy Forever',
		image: superMeatBoyForever,
		epicRelease: '2020',
		steamRelease: '2021',
		epicLink: 'https://www.epicgames.com/store/en-US/product/super-meat-boy-forever/home',
		steamLink: 'https://store.steampowered.com/app/581660/Super_Meat_Boy_Forever/'
	},
	{
		name: 'Satisfactory',
		image: satisfactory,
		epicRelease: new Date(2020, 4, 19),
		steamRelease: new Date(2020, 5, 8),
		epicLink: 'https://www.epicgames.com/store/en-US/product/satisfactory/home',
		steamLink: 'https://store.steampowered.com/app/526870/Satisfactory/'
	}
];

// Template
// ,
// 	{
// 		name: 'GAME',
// 		image: imageName,
// 		epicRelease: new Date(20xx, m, d),
// 		steamRelease: new Date(20xx, m, d),
// 		xboxRelease: new Date(20xx, m, d),
// 		epicLink: 'https://www.epicgames.com/store/en-US/product/',
// 		steamLink: 'https://store.steampowered.com/app/',
// 		xboxLink: 'https://www.microsoft.com/p/'
// 	}
