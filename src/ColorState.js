import React, { PureComponent } from 'react';
//import PropTypes from 'prop-types';

class ColorState extends PureComponent {
	constructor(props){
		super(props);
		this.state=({
				user:{
					name:"Mark!",
					color:{
						favorite:""
					}
				}
		});
		this.onButtonClick=this.onButtonClick.bind(this);
	}
	onButtonClick(){
		this.setState({
			user:{
				color:{
					favorite:"blue"
				}
			}
		});
	}
	render() {
		return (
			<div>
				<h1> My Favorite color: {this.state.user.color.favorite}</h1>
				<button onClick={this.onButtonClick}>Click Me</button>
			</div>
		);
	}
}



export default ColorState;