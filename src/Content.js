import { Component, useState } from "react"
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
  }

  someFunc = (e) => {
    if(e.target.id === 'incre') {
      this.setState({count: this.state.count + 1})
    }
    else{
      this.setState({count: this.state.count - 1})
    }
  }
  zero = () => {
    this.setState({count: this.state.count = 0})
  }

  render() {
    return (
      <div>
        <button id="incre" onClick={this.someFunc}> + </button>
        <h1>{this.state.count}</h1>
        <button onClick={this.someFunc}> - </button>
        <br/><br/><br/><br/>
        <button onClick={this.zero}>0</button>
      </div>
    )
  }
}

export default App