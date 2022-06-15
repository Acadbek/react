import axios from "axios";
import React, { useState } from "react";

class Hooks extends React.Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      loading: true,
      comments: []
    }

  }

  componentDidMount() { 
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then(post => {
        this.setState({ posts: post, loading: false });
        console.log(post)
      })
    console.log('componentDidMount')
  }

  componentDidUpdate() {
    console.log('componentDidUpdate')
  }

  render() {
    return(
      <div>
        {this.state.loading ? <h3>Loading...</h3> : <h3>{this.state.posts.length}</h3>}
      </div>
    )
  }
}

export default Hooks