// import PostList from "./PostList"

// function Post(props) {
// 	let num = Math.random()
// 	return (
// 		<div>
// 			<PostList cb={props.callBack} key={num + 5} name='kajakjjkajdkajjsdakjjsdhkja' />
// 			<PostList cb={props.callBack} key={num + 1} name='kajakjjkajdkajjsdakjjsdhkja' />
// 			<PostList cb={props.callBack} key={num + 3} name='kajakjjkajdkajjsdakjjsdhkja' />
// 		</div>
// 	)
// }

// export default Post

import { Component, useState } from "react";
import PostList from "./PostList";

class Post extends Component{
	constructor(props) {
		super(props);
		this.state = {
			users: [
				'asad',
				'jasur',
				'boxosh'
			]
		}
	}
	render() {
		return(
			<div>
				<PostList btn={'Delete'} name={this.state.users.map((name) => (<p> { name } </p>))}/>
			</div>
		)
	}
}

export default Post