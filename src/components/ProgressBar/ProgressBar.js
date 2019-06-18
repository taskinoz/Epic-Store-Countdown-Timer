import React from 'react';
import PropTypes from 'prop-types';
import './ProgressBar.scss';

export const ProgressBar = (props) => {
	return (
		<div className="progress-parent" style={{height: props.height, width: props.width}}>
			<ProgressFiller percentage={props.percentage} />
		</div>
	);
};

const ProgressFiller = (props) => {
	const percentageWithPercent = props.percentage + '%';
	const backgroundGradient = {background: `linear-gradient(90deg, #28ACF3 ${percentageWithPercent}, transparent ${percentageWithPercent})`};
	return <div className="progress-child" style={{backgroundGradient}}>{percentageWithPercent}</div>;
};

ProgressBar.propTypes = {
	percentage: PropTypes.number.isRequired,
	height: PropTypes.number.isRequired,
	width: PropTypes.number.isRequired
};

ProgressFiller.propTypes = {
	percentage: PropTypes.number.isRequired
};
