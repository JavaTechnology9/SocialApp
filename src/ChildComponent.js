import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ChildComponent extends Component {
	static propTypes = {
		name: PropTypes.string
	}
	static defaultProps = (function () {
		console.log("ChildComponent: defaultProps");
		return {};
	});
	constructor(props) {
		super(props);
		console.log("ChildComponent: state ");
		this.state={
			oops:false
		}
		
		this.oops=this.oops.bind(this);
	}
	componentWillMount(){
		console.log("ChildComponent: willMount Method ");
	}
	componentDidMount(){
		console.log("ChildComponent: DidMount Method ");
	}
	shouldComponentUpdate(nextProps,nextState){
		console.log("ChildComponent: shouldComponentUpdate Method ");
		console.log("ChildComponent=> NextProps:",nextProps);
		console.log("ChildComponent=> NextState:",nextState);
		return true;
	}
	componentWillUpdate(nextProps,nextState){
		console.log("ChildComponent: componentWillUpdate Method ");
		console.log("ChildComponent=> NextProps:",nextProps);
		console.log("ChildComponent=> NextState:",nextState);
	}
	componentDidUpdate(nextProps,nextState){
		console.log("ChildComponent: componentDidUpdate Method ");
		console.log("ChildComponent=> NextProps:",nextProps);
		console.log("ChildComponent=> NextState:",nextState);
	}
	componentWillReceiveProps(nextProps){
		console.log("ChildComponent: componentWillReceiveProps Method ");
		console.log("ChildComponent=> NextProps:",nextProps);
	}
	componentWillUnmount(){
		console.log("ChildComponent: componentWillUnmount Method ");
	}
	oops(){
		this.setState({
			oops:true
		})
	}


	render() {
		if(this.state.oops){
			throw new Error("Something went wrong");
		}
		console.log("ChildComponent: render method ");
		return (
			<div>
				Name: {this.props.name}
				<button key="error" onClick={this.oops}>Create Error</button>
			</div>
		);
	}
}
ChildComponent.propTypes = {

};





export default ChildComponent;