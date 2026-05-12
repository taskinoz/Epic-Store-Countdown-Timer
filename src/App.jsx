import React from 'react';
import './styles/App.scss';

// Components
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { GameContainer } from './components/GameContainer/GameContainer';

// Data
import { games } from './data/games';

function App() {
	const availableGamesMap = games.map((game, index) => {
		// Only do this if items have no stable IDs
		if (game.steamRelease <= new Date() && typeof game.steamRelease !== 'string') {
			return(<GameContainer
				completed
				key={index}
				name={game.name}
				image={game.image}
				epicRelease={game.epicRelease}
				steamRelease={game.steamRelease}
				xboxRelease={game.xboxRelease}
				epicLink={game.epicLink}
				steamLink={game.steamLink}
				xboxLink={game.xboxLink}
			/>);
		}
		return undefined;
	});
	const unavailableGamesMap = games.map((game, index) => {
		// Only do this if items have no stable IDs
		if (game.steamRelease > new Date() || typeof game.steamRelease === 'string') {
			return (<GameContainer
				key={index}
				name={game.name}
				image={game.image}
				epicRelease={game.epicRelease}
				steamRelease={game.steamRelease}
				xboxRelease={game.xboxRelease}
				epicLink={game.epicLink}
				steamLink={game.steamLink}
				xboxLink={game.xboxLink}
			/>);
		}
		return undefined;
	});

	// const gameMap = games.map((game, index) => (
	// 	// Only do this if items have no stable IDs
	// 	<GameContainer
	// 		key={index}
	// 		name={game.name}
	// 		image={game.image}
	// 		epicRelease={game.epicRelease}
	// 		steamRelease={game.steamRelease}
	// 		xboxRelease={game.xboxRelease}
	// 		epicLink={game.epicLink}
	// 		steamLink={game.steamLink}
	// 		xboxLink={game.xboxLink}
	// 	/>
	// ));

	// Failed sorting method, sample size is small enough to manually sort... so far
	// gameMap.sort((gameObj, secondGameObj) => {
	// 	if (typeof gameObj.props.steamRelease === 'string') {
	// 		return 1;
	// 	}
	// 	return gameObj.props.steamRelease - secondGameObj.props.steamRelease;
	// });
	return (
		<div className="App">
			<Header />
			<span className="section-header">Available</span>
			<div className="game-containers">{availableGamesMap}</div>
			<span className="section-header">Soon...</span>
			<div className="game-containers">{unavailableGamesMap}</div>
			<Footer />
		</div>
	);
}

export default App;
