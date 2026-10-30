import './styles/App.scss';

// Components
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { GameContainer } from './components/GameContainer/GameContainer';

// Data
import { games, isReleased } from './data/games';

// Dated releases first (soonest first), then undated ones like "TBA"
const byRelease = (a, b) => {
	const aDated = a.steamRelease instanceof Date;
	const bDated = b.steamRelease instanceof Date;
	if (aDated && bDated) {
		return a.steamRelease - b.steamRelease;
	}
	return Number(bDated) - Number(aDated);
};

function App() {
	const now = new Date();
	const available = games
		.filter((game) => isReleased(game.steamRelease, now))
		.sort((a, b) => byRelease(b, a));
	const upcoming = games
		.filter((game) => !isReleased(game.steamRelease, now))
		.sort(byRelease);

	return (
		<div className="App">
			<Header />
			<span className="section-header">Available</span>
			<div className="game-containers">
				{available.map((game) => <GameContainer key={game.name} completed {...game} />)}
			</div>
			{upcoming.length > 0 && (
				<>
					<span className="section-header">Soon...</span>
					<div className="game-containers">
						{upcoming.map((game) => <GameContainer key={game.name} {...game} />)}
					</div>
				</>
			)}
			<Footer />
		</div>
	);
}

export default App;
