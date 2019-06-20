import React from 'react';
import './styles/App.scss';

// Components
import {Header} from './components/Header/Header';
import {Footer} from './components/Footer/Footer';
import {GameContainer} from './components/GameContainer/GameContainer';

// Data
import {games} from './data/games';

function App() {
	const gameMap = games.map((game, index) =>
	// Only do this if items have no stable IDs
		<GameContainer
			key={index}
			name={game.name}
			image={game.image}
			epicRelease={game.epicRelease}
			steamRelease={game.steamRelease}
			xboxRelease={game.xboxRelease}
			epicLink={game.epicLink}
			steamLink={game.steamLink}
			xboxLink={game.xboxLink}
		/>
	);
	gameMap.sort((gameObj, secondGameObj) => {
		if (typeof gameObj.props.steamRelease === 'string') {
			return 1;
		}
		return gameObj.props.steamRelease - secondGameObj.props.steamRelease;
	});
	return (
		<div className="App">
			<Header />
			<div id="game-containers">
				{gameMap}
			</div>
			<Footer />
		</div>
	);
}

export default App;
