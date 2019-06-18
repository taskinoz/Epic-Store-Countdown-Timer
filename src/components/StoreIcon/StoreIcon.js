import React from 'react';
import PropTypes from 'prop-types';

// Store Icons
import epicStore from '../../storeicons/epic_games_store.png';
import steamStore from '../../storeicons/steam.png';
import xboxStore from '../../storeicons/xbox_game_pass.png';

export const StoreIcon = (props) => {
	let imageStyle = {
		opacity: props.available ? 1 : 0.4
	};

	let storeIcon;
	switch (props.store) {
	case 'epic':
		storeIcon = epicStore;
		break;
	case 'steam':
		storeIcon = steamStore;
		break;
	case 'xbox':
		storeIcon = xboxStore;
		break;
	default:
		break;
	}


	return (
		<div className="store-icon">
			<a href={props.link} target="_blank" rel="noopener noreferrer">
				<img src={storeIcon} alt="Epic Games Store" style={imageStyle} />
			</a>
		</div>
	);
};

StoreIcon.propTypes = {
	store: PropTypes.string.isRequired,
	link: PropTypes.string.isRequired,
	available: PropTypes.bool.isRequired
};
