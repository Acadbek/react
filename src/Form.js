import React from "react";

export default class Form extends React.Component {
	state = {
		firstName: '',
		email: 'asd',
		message: '',
		select: '',
		subscribe: false
	}
	changeHandler = (e) => {
		let value = e.target.value
		this.setState({ [e.target.name]: value })
	}
	checkboxHandler = (e) => {
		let value = e.target.checked === true ?
			[localStorage.setItem('subscribe', this.state.subscribe = true),
			localStorage.setItem('email', this.state.email)] : ''
		this.setState({ [e.target.name]: value })
	}

	emailIsValid = () => {
		const re = /\S+@\S+\.\S+/
		if (!re.test(this.state.email)) {
			alert('email togri kirit')
		}
	}

	componentDidMount() {
		console.log('mount')
		this.setState({ firstName: localStorage.getItem('name') })
		this.setState({ email: localStorage.getItem('email') })
	}
	// ||
	send = () => {
		const { email, subscribe } = this.state
		if (!email) {
			alert('email ni toldirmaysanmi')
		}
		else if (!subscribe) {
			alert('checkbox')
		}
		else if (!subscribe && !email) {
			alert('malumotlarni toldir')
		}
		else {
			alert('welcome')
		}
	}

	render() {
		const { email, subscribe } = this.state
		return (
			<div>
				{/* <input
					placeholder="First Name"
					value={firstName}
					type="text"
					name="firstName"
					onChange={this.changeHandler}
					onBlur={this.validateName}
				/> */}
				<input
					placeholder="Email"
					value={email}
					type="text"
					name="email"
					onChange={this.changeHandler}
					onBlur={this.emailIsValid}
				/>
				{/* <select name="select" value={select} onChange={this.changeHandler}>
					<option disabled></option>
					<option value='1'>1</option>
					<option value='3'>3</option>
					<option value='4'>4</option>
				</select> */}
				<p>Are you agree our rules?</p>
				<input name='subscribe' type='checkbox' checked={subscribe} onChange={this.checkboxHandler}></input>
				<button onClick={this.send}>Send</button>
			</div>
		)
	}
}