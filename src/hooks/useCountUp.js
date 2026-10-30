import { useEffect, useState } from 'react';

// easeOutExpo, the same curve countup.js uses
const ease = (progress) => (progress === 1 ? 1 : (1 - Math.pow(2, -10 * progress)) * 1024 / 1023);

// Animates a number from `start` to `end` over `duration` milliseconds
export const useCountUp = (end, { start = 0, duration = 2000 } = {}) => {
	const [value, setValue] = useState(start);
	useEffect(() => {
		let frame;
		const startTime = performance.now();
		const tick = (time) => {
			const progress = Math.min((time - startTime) / duration, 1);
			setValue(start + (end - start) * ease(progress));
			if (progress < 1) {
				frame = requestAnimationFrame(tick);
			}
		};
		frame = requestAnimationFrame(tick);
		return () => cancelAnimationFrame(frame);
	}, [start, end, duration]);
	return value;
};
