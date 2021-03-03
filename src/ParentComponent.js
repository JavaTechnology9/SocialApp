import React, { Component } from 'react';
import ChildComponent from "./ChildComponent";

//import PropTypes from 'prop-types';

class ParenetComponent extends Component {
	static defaultProps=(function(){
	console.log("ParenetComponent: defaultProps is calling")
	return{
		true:false
	};
	})
	constructor(props) {
		super(props);
		console.log("ParenetComponent: state")
		this.state={
			name:""
		}
		this.onInputChange=this.onInputChange.bind(this);
		
	}
	componentWillMount(){
		console.log("ParenetComponent: willMount Method ");
	}
	componentDidMount(){
		console.log("ParenetComponent: DidMount Method ");
	}
	shouldComponentUpdate(nextProps,nextState){
		console.log("ParenetComponent: shouldComponentUpdate Method ");
		console.log("ParenetComponent=> NextProps:",nextProps);
		console.log("ParenetComponent=> NextState:",nextState);
		return true;
	}
	componentWillUpdate(nextProps,nextState){
		console.log("ParenetComponent: componentWillUpdate Method ");
		console.log("ParenetComponent=> NextProps:",nextProps);
		console.log("ParenetComponent=> NextState:",nextState);
	}
	componentDidUpdate(nextProps,nextState){
		console.log("ParenetComponent: componentDidUpdate Method ");
		console.log("ParenetComponent=> NextProps:",nextProps);
		console.log("ParenetComponent=> NextState:",nextState);
	}
	componentWillReceiveProps(nextProps){
		console.log("ParenetComponent: componentWillReceiveProps Method ");
		console.log("ParenetComponent=> NextProps:",nextProps);
	}
	componentWillUnmount(){
		console.log("ParenetComponent: componentWillUnmount Method ");
	}

	onInputChange(e){
		this.setState({
			name:e.target.value
		});
	}
	componentDidCatch(err, errInfo){
		console.log("ParenetComponent: componentDidCatch Method ");
		console.log("ParenetComponent=> err:",err);
		console.log("ParenetComponent=> errInfo:",errInfo);
		this.setState({
			err,errInfo
		})
	}
	render(){
		console.log("ParenetComponent: render")
		return(
			<div>
			<h2 key="h2">Learn about React Life Cycle methods </h2>
			<input type="text" key="input" value={this.state.name} onChange={this.onInputChange}/>
			<ChildComponent key="ChildComponent" name={this.state.name}/>
			</div>
		);
	}

}

export default ParenetComponent;