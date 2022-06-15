import {Component, useState} from "react";
class PracticeHooks extends Component{
  constructor() {
    super();
    this.state = {
      count: 0,
      stop: true,
    }
  }
  componentDidMount() {
    console.log("componentDidMount")
    this.setState({count: +localStorage.getItem('item')})
  }

  start = () => {
    this.setState({stop: false})
    this.counterID = setInterval(() => {
      this.setState({count: this.state.count + 1})
      localStorage.setItem('item', this.state.count + 1)
    }, 1000)
  }

  stop = () => {
    this.setState({stop: true})
    clearInterval(this.counterID)
  }

  reset = () => {
    clearInterval(this.counterID)
    localStorage.removeItem('item');
    this.setState({stop: true, count: 0})
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
          {this.state.count ? this.state.count : 0}
        </h1>
      </div>
    )
  }
}

export default PracticeHooks