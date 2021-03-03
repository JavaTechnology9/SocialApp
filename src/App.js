import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Navbar from "./components/nav/Navbar";
import Loader from './components/Loader'
import Welcome from './components/welcome/Welcome'
import Ad from './components/ad/Ad'
import Image1 from './static/images/Facebook.jpg'
import Image2 from './static/images/LinkedIn.jpg'
import * as API from './shared/http'
import Post from './components/post/Post'

class App extends PureComponent {
	static propTypes={
		children: PropTypes.node
	}
	constructor(props){
		super(props);
		this.state={
			error:null,
			loading:false,
			posts:[],
			endpoint:"http://localhost:8080/"
		}
		this.getPosts=this.getPosts.bind(this);
		
	}
	componentDidMount(){
		this.getPosts();
	}
	componentDidCatch(err,errInfo){
		console.log(err);
		console.error(errInfo);
		this.setState(()=>({
			error:err
		}));
	}
	getPosts(){
		API.fetchPosts(this.state.endpoint) 
		.then(res=>{
			return res.json()
			.then(posts=>{
				this.setState(()=>({
					posts:this.state.posts.concat(posts)
				}));
			})
			.catch(err=>{
				this.setState(()=>({
					error:err
				}))
			})
		})
	}
	render() {
		return (
			<div className="app">
				<Navbar/>
				{this.state.loading?(
					<div className="loading">
						<Loader/>
					</div>
				):(
					<div className="home">
						<Welcome/>
					<div>
						<div>
							{this.state.posts.length &&(
								<div className="posts">
									{this.state.posts.map(id =>
										<Post id={id} key={id}
										user={this.props.user}/>
									)}
								</div>
							) }
						</div>
					<button className="blcok" onClick={this.getPosts}>Load more posts</button>	
					</div>
					<div>
						<Ad
						uri="http://facebook.com" 
						imageUrl={Image1} />
					</div>	
					<div>
						<Ad
						uri="http://LinkedIn.com" 
						imageUrl={Image2} />
					</div>	
					</div>
				)}
				
			</div>
		);
	}
}



export default App;
