import React from 'react';
import PropTypes from 'prop-types';

const Ad=props=>{
	return (
		<div className="ad">
			<a target="_blank" href={props.url}>
				<img className="img-responsive" src={props.imageUrl} alt="Image is not showing">
					
				</img>
			</a>
			<small> ads by Facebook</small>
		</div>
	);
};

Ad.propTypes={
	imageUrl:PropTypes.string,
	uri: PropTypes.string
}

export default Ad;