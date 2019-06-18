import React from 'react';
import PropTypes from 'prop-types';

// CSS
import './GameContainer.scss';

// Components
import { TimerBox } from '../TimerBox/TimerBox';
import { ProgressBar } from '../ProgressBar/ProgressBar';

// Store Icons
import epicStore from '../../storeicons/epic_games_store.png';
import steamStore from '../../storeicons/steam.png';
import xboxStore from '../../storeicons/xbox_game_pass.png';

export class GameContainer extends React.Component {

	dateFormatter (date) {
		return date.toLocaleDateString('en-AU', {year: '2-digit', day: '2-digit', month: 'short' }).replace(/ /g, '-');
	}

	render() {
		const xboxIcon = (<div className="xbox">
			<a href={this.props.xboxLink}>
				<img src={xboxStore} alt="XBOX Game Pass" />
			</a>
		</div>);
		return (
			<section className="game-container">
				<div className="game-image">
					<img src={this.props.image} alt={this.props.name} />
				</div>
				<div className="game-info">
					<h2>{this.props.name}</h2>
				</div>
				<div className="availibility-timer">
					<TimerBox label="Weeks" number={51} />
					<TimerBox label="Days" number={6} />
					<TimerBox label="Hours" number={23} />
				</div>
				<div className="game-dates">
					<p>Epic <span className="game-release-date">{this.dateFormatter(this.props.epicRelease)}</span></p>
					<p>Steam <span className="game-release-date">{this.dateFormatter(this.props.steamRelease)}</span></p>
				</div>
				<div className="game-progress">
					<ProgressBar percentage={75} width={159} height={73}/>
				</div>
				<div className="game-links">
					<div className="epic">
						<a href={this.props.epicLink}>
							<img src={epicStore} alt="Epic Games Store" />
						</a>
					</div>
					<div className="steam">
						<a href={this.props.steamLink}>
							<img src={steamStore} alt="Steam" />
						</a>
					</div>
					{this.props.xboxLink !== '' ? xboxIcon : ''}
				</div>
			</section>
		);
	}
}

GameContainer.propTypes = {
	image: PropTypes.string,
	name: PropTypes.string.isRequired,
	epicRelease: PropTypes.object.isRequired,
	steamRelease: PropTypes.object.isRequired,
	epicLink: PropTypes.string.isRequired,
	steamLink: PropTypes.string.isRequired,
	xboxLink: PropTypes.string
};
