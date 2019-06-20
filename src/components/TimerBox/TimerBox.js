import React from 'react';
import PropTypes from 'prop-types';

import CountUp from 'react-countup';

import './TimerBox.scss';

export const TimerBox = props => {
	let label = props.label;
	if (props.currentTime !== 1) {
		label += 's';
	}
	let displayNumber = <CountUp className="timer-box-number" duration={3} start={props.initialTime} end={props.currentTime}/>;
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

TimerBox.propTypes = {
	label: PropTypes.string.isRequired,
	currentTime: PropTypes.number.isRequired,
	initialTime: PropTypes.number.isRequired
};
