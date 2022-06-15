import axios from "axios";
import React, { useState } from "react";
import PracticeHooks from './practiceHooks'
class Hooks extends React.Component {
	constructor() {
		super();
		this.state = {
			posts: [],
			loading: true,
			comments: [],
			favouriteColor: 'blue',
		}

	}

	componentDidMount() { 
		fetch('https://reqres.in/api/users')
			.then((response) => response.json())
			.then(post => {
				this.setState({ posts: post, loading: false });
				console.log(post.data)
			})
	}
		
	componentDidUpdate() {
	
	}

	render() {
		return(
			<div>
				<PracticeHooks/>
				{this.state.loading ? <h3>Loading...</h3> : <h3>{this.state.posts.length}</h3>}
				<h3>My favourite color is {this.state.favouriteColor}</h3>
				<h3>{this.state.comments.length}</h3>
			</div>
		)
	}
}

export default Hooks