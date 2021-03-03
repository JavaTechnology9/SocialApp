import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';



class Letters extends PureComponent {
	constructor(props) {
		
		this.state({
			list:[]
		})
	}//["L","E","T","T","E","R"]


	render() {
		return (
			<div>
				{list}
			</div>
		);
	}
}

Letters.propTypes = {

};

export default Letters;