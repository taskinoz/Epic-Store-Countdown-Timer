import React from 'react';
import PropTypes from 'prop-types';

// CSS
import './GameContainer.scss';

// Components
import { TimerBox } from '../TimerBox/TimerBox';
import { ProgressBar } from '../ProgressBar/ProgressBar';
import { StoreIcon } from '../StoreIcon/StoreIcon';

export class GameContainer extends React.Component {
	dateFormatter(date) {
		if (typeof date !== 'object') {
			return date;
		}
		return date
			.toLocaleDateString('en-AU', {
				year: '2-digit',
				day: '2-digit',
				month: 'short'
			})
			.replace(/ /g, '-');
	}

	gameAvailable(releaseDate) {
		if (typeof releaseDate !== 'object') {
			return false;
		}
		return releaseDate <= Date.now();
	}

	gamePercentage(epicDate, steamDate) {
		if (typeof epicDate !== 'object') {
			return 0;
		}
		const percentage = ((Date.now() - epicDate) / (steamDate - epicDate)) * 100;
		if (percentage < 0) {
			return 0;
		} else if (percentage > 100) {
			return 100;
		} else {
			return percentage;
		}
	}

	timeTilRelease(releaseDate, comparisonDate = Date.now()) {
		if (typeof releaseDate !== 'object') {
			return { weeks: '-', days: '-', hours: '-' };
		}
		const timeDiff = releaseDate - comparisonDate;
		const weeks = ~~(timeDiff / (7 * 24 * 60 * 60 * 1000));
		const days = ~~((timeDiff / (60 * 60 * 24)) % 7);
		const hours = ~~((timeDiff / (60 * 60)) % 24);
		return {
			weeks,
			days,
			hours
		};
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
				{this.props.completed ? <a className="completed" href={this.props.steamLink}>Buy from Steam</a> : <div className="availibility-timer">
					<TimerBox
						label="Week"
						initialTime={this.timeTilRelease(this.props.steamRelease, this.props.epicRelease).weeks}
						currentTime={this.timeTilRelease(this.props.steamRelease).weeks}
					/>
					<TimerBox
						label="Day"
						initialTime={7}
						currentTime={this.timeTilRelease(this.props.steamRelease).days}
					/>
					<TimerBox
						label="Hour"
						initialTime={24}
						currentTime={this.timeTilRelease(this.props.steamRelease).hours}
					/>
				</div>}
				<div className="game-progress">
					<ProgressBar
						percentage={this.gamePercentage(
							this.props.epicRelease,
							this.props.steamRelease
						)}
						width={159}
						height={73}
					/>
				</div>
				<div className="game-dates">
					<p>
						Epic{' '}
						<span className="game-release-date">
							{this.dateFormatter(this.props.epicRelease)}
						</span>
					</p>
					<p>
						Steam{' '}
						<span className="game-release-date">
							{this.dateFormatter(this.props.steamRelease)}
						</span>
					</p>
				</div>
				<div className="game-links">
					<StoreIcon
						store="epic"
						link={this.props.epicLink}
						available={this.gameAvailable(this.props.epicRelease)}
					/>
					<StoreIcon
						store="steam"
						link={this.props.steamLink}
						available={this.gameAvailable(this.props.steamRelease)}
					/>
					{this.props.xboxLink ? (
						<StoreIcon
							store="xbox"
							link={this.props.xboxLink}
							available={this.gameAvailable(this.props.xboxRelease)}
						/>
					) : (
						<div className="empty-icon" />
					)}
				</div>
			</section>
		);
	}
}

GameContainer.propTypes = {
	image: PropTypes.string,
	name: PropTypes.string.isRequired,
	epicRelease: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
		.isRequired,
	steamRelease: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
		.isRequired,
	xboxRelease: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
	epicLink: PropTypes.string.isRequired,
	steamLink: PropTypes.string.isRequired,
	xboxLink: PropTypes.string,
	completed: PropTypes.bool
};
