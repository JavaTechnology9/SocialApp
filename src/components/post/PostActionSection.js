import PropTypes from 'prop-types'
import React from 'react'

const PostActionSectin=props=>{
	const{showComments}=props;
	return(
		<div className="post-action">
			<span>
				<i className="fa fa-commenting-o"/>
				<i>{showComments}</i>
			</span>
		</div>
	);
};

export default PostActionSectin;