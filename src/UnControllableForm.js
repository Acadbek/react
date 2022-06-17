import React, { Component } from 'react'

export default class UncontrollableForm extends Component {
  constructor() {
    super();
    this.firstRef = React.createRef();
    this.secondRef = React.createRef();
  }
  handleClick = (e) => {
    e.preventDefault();
    if(this.firstRef.current.value.length < 5) {
      alert('invalit')
    }
  }
  render() {
    return (
      <div>
        <div>Un Controllable Form</div>
        <form onSubmit={this.handleClick}>
          <input type='text' name='firstName' placeholder='first name' ref={this.firstRef}/>
          <input type='text' name='firstName' placeholder='first name' ref={this.secondRef}/>
          <button>Send</button>
        </form>
      </div>
    )
  }
}
