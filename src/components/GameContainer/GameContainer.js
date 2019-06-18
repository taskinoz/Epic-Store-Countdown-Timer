import React from 'react';
import PropTypes from 'prop-types';

// CSS
import './GameContainer.scss';

// Components
import { TimerBox } from '../TimerBox/TimerBox';
import { ProgressBar } from '../ProgressBar/ProgressBar';
import { StoreIcon } from '../StoreIcon/StoreIcon';

export class GameContainer extends React.Component {

	dateFormatter (date) {
		return date.toLocaleDateString('en-AU', {year: '2-digit', day: '2-digit', month: 'short' }).replace(/ /g, '-');
	}

	gameAvailable(date) {
		return date <= Date.now();
	}

	gamePercentage(epicDate, steamDate) {
		const percentage = (Date.now() - epicDate) / (steamDate - epicDate) * 100;
		if (percentage < 0) {
			return 0;
		} else if (percentage > 100) {
			return 100;
		} else {
			return percentage;
		}
	}

	render() {
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
					<ProgressBar percentage={this.gamePercentage(this.props.epicRelease, this.props.steamRelease)} width={159} height={73}/>
				</div>
				<div className="game-links">
					<StoreIcon store='epic' link={this.props.epicLink} available={this.gameAvailable(this.props.epicRelease)} />
					<StoreIcon store='steam' link={this.props.steamLink} available={this.gameAvailable(this.props.steamRelease)} />
					{this.props.xboxLink ? <StoreIcon store='xbox' link={this.props.xboxLink} available={this.gameAvailable(this.props.xboxRelease)} /> : <div className="empty-icon"></div>}
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
	xboxRelease: PropTypes.object.isRequired,
	epicLink: PropTypes.string.isRequired,
	steamLink: PropTypes.string.isRequired,
	xboxLink: PropTypes.string
};
