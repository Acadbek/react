import {Component, useState} from "react";

class PracticeHooks extends Component{
  state = {
    count: 7,
    stop: false
  }

  componentDidMount() {
    window.localStorage.getItem('count',  this.setState({count: this.state.count + 1}))
  }

  render() {
    return(
      <div>
        <button onClick={this.start}>Start</button>
        <h1>
          {this.state.count}
        </h1>
      </div>
    )
  }
}

export default PracticeHooks