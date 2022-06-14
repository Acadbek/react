import { Component, useState } from "react"
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
  }

  someFunc(val) {
    this.setState({count: val})
  }

  // someFunc = (e) => {
  //   e.target.id === 'incre' ? this.setState({ count: this.state.count + 1 })
  //     : e.target.id === 'zero' ? this.setState({ count: this.state.count = 0 })
  //       : this.setState({ count: this.state.count - 1 })
  // }
  render() {
    return (
      <div>
        <button id="incre" onClick={() => this.someFunc(this.state.count + 1)}> + </button>
        <h1>{this.state.count}</h1>
        <button onClick={() => this.someFunc(this.state.count - 1)}> - </button>
        <br /><br /><br /><br />
        <button id="zero" onClick={() => this.someFunc(0)}>0</button>
      </div>
    )
  }
}

export default App