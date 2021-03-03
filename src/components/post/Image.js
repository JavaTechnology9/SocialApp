import PropTypes from 'prop-types'
import React from 'react'


const Image =props=>{
	if(props.post && props.post.image){
		return (
			<img className="img-responsive" src={props.post.image}
			alt="React Js Post Example"/>
		)
	}
	return null;
};
Image.prototype={
	post:PropTypes.shape({image:PropTypes.string})
}
export default Image;
