import React from "react";

const progressBarStyle = {
	background: '#5E5E5E',
	borderRadius: 10,
	overflow: 'hidden'
}

const progressChildStyle = {
	width: '100%',
	height: '100%',
	color: 'white',
	fontSize: 35,
	fontWeight: '300'
}

export const ProgressBar = (props) => {
	return (
		<div style={{...progressBarStyle, ...{height: props.height, width: props.width}}}>
			<ProgressFiller percentage={props.percentage} />
		</div>
	);
}

class ProgressFiller extends React.Component {
	render() {
		const percentageWithPercent = this.props.percentage + '%';
		const backgroundGradient = {background: `linear-gradient(90deg, #28ACF3 ${percentageWithPercent}, transparent ${percentageWithPercent})`}
		return <div style={{...progressChildStyle, ...backgroundGradient}}>{percentageWithPercent}</div>
	}
}
