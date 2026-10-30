import { useCountUp } from '../../hooks/useCountUp';

import './TimerBox.scss';

const CountUp = ({ start, end }) => {
	const value = useCountUp(end, { start, duration: 3000 });
	return <span className="timer-box-number">{Math.round(value)}</span>;
};

export const TimerBox = props => {
	let label = props.label;
	if (props.currentTime !== 1) {
		label += 's';
	}
	let displayNumber = (
		<CountUp
			start={typeof props.initialTime === 'number' ? props.initialTime : 0}
			end={props.currentTime}
		/>
	);
	if (typeof props.currentTime !== 'number') {
		displayNumber = <p className="timer-box-number">{props.currentTime}</p>;
	}
	return (
		<div>
			{displayNumber}
			<p className="timer-box-label">{label}</p>
		</div>
	);
};
