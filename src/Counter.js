import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Counter extends PureComponent {
	static propTypes={
		incrementBy:PropTypes.number,
		onButtonClick:PropTypes.func.isRequired
	}
	static defaulltProps={
		incrementBy:1 // will methods  
		// did Called After something
	}
	constructor(props){
		super(props);
		this.state={
			count:0
		}
		this.onButtonClick=this.onButtonClick.bind(this);

	}
	onButtonClick(){
		this.setState(function(prevState,props){
			return {count:prevState.count + props.incrementBy}
		});
	}
	render() {
		return (
			<div>
				<h1>{this.state.count}</h1>
				<button onClick={this.onButtonClick}>Click Me</button>
			</div>
		);
	}
}

Counter.propTypes = {

};

export default Counter;