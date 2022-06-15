import {Component, useState, setState} from "react";
class PracticeHooks extends Component{
  constructor() {
    super();
    this.state = {
      count: 0,
      stop: true,
    }
  }

  start = () => {
    this.setState({stop: false})
    this.counterID = setInterval(() => {
      this.setState({count: this.state.count + 1})
    }, 1000)
  }

  stop = () => {
    this.setState({stop: true})
    clearInterval(this.counterID)
  }

  reset = () => {
    clearInterval(this.counterID)
    this.setState({stop: true})
    this.setState({count: 0})
  }

  render() {
    return(
      <div>
          { 
            this.state.stop ? 
            <button onClick={this.start}>Start</button> :
            <button onClick={this.stop}>Stop</button>
          }
          <button onClick={this.reset}>Reset</button>
        <h1>
          {this.state.count}
        </h1>
      </div>
    )
  }
}

export default PracticeHooks