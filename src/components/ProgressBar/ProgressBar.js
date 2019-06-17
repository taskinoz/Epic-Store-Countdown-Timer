import React from "react";
import "./ProgressBar.scss"

export const ProgressBar = (props) => {
	return (
		<div className="progress-parent" style={{height: props.height, width: props.width}}>
			<ProgressFiller percentage={props.percentage} />
		</div>
	);
}

class ProgressFiller extends React.Component {
	render() {
		const percentageWithPercent = this.props.percentage + '%';
		const backgroundGradient = {background: `linear-gradient(90deg, #28ACF3 ${percentageWithPercent}, transparent ${percentageWithPercent})`}
		return <div className="progress-child" style={{backgroundGradient}}>{percentageWithPercent}</div>
	}
}
