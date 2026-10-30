// CSS
import './GameContainer.scss';

// Components
import { TimerBox } from '../TimerBox/TimerBox';
import { ProgressBar } from '../ProgressBar/ProgressBar';
import { StoreIcon } from '../StoreIcon/StoreIcon';

const HOUR = 60 * 60 * 1000;
const DAY = 24 * HOUR;
const WEEK = 7 * DAY;

const isDate = (value) => value instanceof Date;

const dateFormatter = (date) => {
	if (!isDate(date)) {
		return date;
	}
	return date
		.toLocaleDateString('en-AU', {
			year: '2-digit',
			day: '2-digit',
			month: 'short'
		})
		.replace(/ /g, '-');
};

const gameAvailable = (releaseDate) => isDate(releaseDate) && releaseDate <= Date.now();

const gamePercentage = (epicDate, steamDate) => {
	if (!isDate(epicDate) || !isDate(steamDate)) {
		return 0;
	}
	const percentage = ((Date.now() - epicDate) / (steamDate - epicDate)) * 100;
	return Math.min(100, Math.max(0, percentage));
};

const timeTilRelease = (releaseDate, comparisonDate = Date.now()) => {
	if (!isDate(releaseDate)) {
		return { weeks: '-', days: '-', hours: '-' };
	}
	const timeDiff = Math.max(0, releaseDate - comparisonDate);
	return {
		weeks: Math.floor(timeDiff / WEEK),
		days: Math.floor((timeDiff % WEEK) / DAY),
		hours: Math.floor((timeDiff % DAY) / HOUR)
	};
};

export const GameContainer = ({
	name,
	image,
	epicRelease,
	steamRelease,
	xboxRelease,
	epicLink,
	steamLink,
	xboxLink,
	completed = false
}) => {
	const remaining = timeTilRelease(steamRelease);
	return (
		<section className="game-container">
			<div className="game-image">
				<img src={image} alt={name} />
			</div>
			<div className="game-info">
				<h2>{name}</h2>
			</div>
			{completed ? <a className="completed" href={steamLink}>Buy from Steam</a> : <div className="availibility-timer">
				<TimerBox
					label="Week"
					initialTime={timeTilRelease(steamRelease, epicRelease).weeks}
					currentTime={remaining.weeks}
				/>
				<TimerBox
					label="Day"
					initialTime={7}
					currentTime={remaining.days}
				/>
				<TimerBox
					label="Hour"
					initialTime={24}
					currentTime={remaining.hours}
				/>
			</div>}
			<div className="game-progress">
				<ProgressBar
					percentage={gamePercentage(epicRelease, steamRelease)}
					width={159}
					height={73}
				/>
			</div>
			<div className="game-dates">
				<p>
					Epic{' '}
					<span className="game-release-date">
						{dateFormatter(epicRelease)}
					</span>
				</p>
				<p>
					Steam{' '}
					<span className="game-release-date">
						{dateFormatter(steamRelease)}
					</span>
				</p>
			</div>
			<div className="game-links">
				<StoreIcon
					store="epic"
					link={epicLink}
					available={gameAvailable(epicRelease)}
				/>
				<StoreIcon
					store="steam"
					link={steamLink}
					available={gameAvailable(steamRelease)}
				/>
				{xboxLink ? (
					<StoreIcon
						store="xbox"
						link={xboxLink}
						available={gameAvailable(xboxRelease)}
					/>
				) : (
					<div className="empty-icon" />
				)}
			</div>
		</section>
	);
};
