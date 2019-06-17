import React from 'react';

// CSS
import './GameContainer.scss';

// Store Icons
import epicStore from '../../storeicons/epic_games_store.png';
import steamStore from '../../storeicons/steam.svg';
import xboxStore from '../../storeicons/xbox_game_pass.png';

export class GameContainer extends React.Component {
	render() {
		return (
			<section className="game-container">
				<div className="game-image">
					<img src={this.props.image} />
				</div>
				<div className="game-info">
					<h2>{this.props.name}</h2>
				</div>
				<div className="availibility-timer">

				</div>
				<div className="game-links">
					<div className="epic">
						<a href={this.props.epicLink}>
							<img src={epicStore} />
						</a>
					</div>
					<div className="steam">
						<a href={this.props.steamLink}>
							<img src={steamStore} />
						</a>
					</div>
					<div className="xbox">
						<a href={this.props.xboxLink}>
							<img src={xboxStore} />
						</a>
					</div>
				</div>
			</section>
		);
	}
}
