import {Component, useState} from "react";

class Iteration extends Component{
  state = {
    users: ['asad', 'jasur', 'sayod']
  }
  render() {
    return(
      <div>
        <div>
          {this.state.users.map(user => (
            <h1>{user}</h1>
          ))}
        </div>
      </div>
    )
  }
}

export default Iteration