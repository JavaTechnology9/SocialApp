import React, { PureComponent } from 'react';
//import PropTypes from 'prop-types';

class Secret extends PureComponent {
	constructor(props){
		super(props);
		this.state=({
				name:"top Secret!"
		});
		this.onButtonClick=this.onButtonClick.bind(this);
	}
	onButtonClick(){
		this.setState({
			name:"mark"
		});
	}

	render() {
		return (
			<div>
				<h1> My Name is: {this.state.name}</h1>
				<button onClick={this.onButtonClick}>Click Me</button>
			</div>
		);
	}
}



export default Secret;