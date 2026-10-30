import { useCountUp } from '../../hooks/useCountUp';

const progressBarStyle = {
	borderRadius: 7,
	overflow: 'hidden',
	textAlign: 'center'
};

const progressFillerStyle = {
	width: '100%',
	height: '100%',
	color: 'white',
	fontSize: 35,
	fontWeight: '300'
};

export const ProgressBar = (props) => {
	const countUp = useCountUp(props.percentage);
	return (
		<div style={{...progressBarStyle, ...{height: props.height, width: props.width}}}>
			<ProgressFiller percentage={countUp} height={props.height} />
		</div>
	);
};

const ProgressFiller = (props) => {
	const percentageWithPercent = props.percentage.toFixed(2) + '%';
	const flooredPercentage = Math.floor(props.percentage) + '%';
	const backgroundGradient = {
		background: `linear-gradient(90deg, #28ACF3 ${percentageWithPercent}, #5E5E5E ${percentageWithPercent})`,
		lineHeight: `${props.height}px`
	};
	return <div style={{...progressFillerStyle, ...backgroundGradient}}>{flooredPercentage}</div>;
};
