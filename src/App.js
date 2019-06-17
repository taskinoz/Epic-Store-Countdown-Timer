import React from 'react';
import './App.scss';

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
			epicLink={game.epicLink}
			steamLink={game.steamLink}
			xboxLink={game.xboxLink}
		/>
	);
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
