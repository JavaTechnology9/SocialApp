import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class CreateComment extends PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			content: "",
			user: ""
		};
		this.handlesubmit=this.handlesubmit.bind(this);
		this.handleUserChange=this.handleUserChange.bind(this);
		this.handleContentChange= this.handleContentChange.bind(this);
	}
	handleUserChange(event){
		const value=event.target.value;
		console.log(value);
		this.setState({
			user:value
		});
	}

	handleContentChange(event){
		const value=event.target.value;
		console.log(value);
		this.setState({
			content:value
		});
	}
	handlesubmit(event){
		event.preventDefault();
		this.props.onCommentSubmit({
			user:this.state.user.trim(),
			content:this.state.content.trim()
		});
		this.setState({
			user:"",
			content:""
		})
	}
	render() {
		return React.createElement("form", {
			className: "createComment",
			onSubmit:this.handlesubmit
		},
			React.createElement("input", {
				type: "text",
				placeholder: "Your Name",
				value: this.state.user,
				onChange:this.handleUserChange
			}),
			React.createElement("input", {
				type: "text",
				placeholder: "Thoughts?",
				value:this.state.content,
				onChange:this.handleContentChange

			}),
			React.createElement("input", {
				type: "submit",
				value: "Post"
			}));
	}
}
CreateComment.propTypes = {
	onCommentSubmit: PropTypes.func.isRequired,
	content: PropTypes.string
}

export default CreateComment;