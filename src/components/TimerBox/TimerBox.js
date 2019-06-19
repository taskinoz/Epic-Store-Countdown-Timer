import React from 'react';
import PropTypes from 'prop-types';

import './TimerBox.scss';

export const TimerBox = (props) => {
	let label = props.label;
	if (props.number === 1) {
		label += 's';
	}
	return (<div>
		<p className="timer-box-number">{props.number}</p>
		<p className="timer-box-label">{label}</p>
	</div>);
};

TimerBox.propTypes = {
	label: PropTypes.string.isRequired,
	number: PropTypes.number.isRequired
};