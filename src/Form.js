import React from "react";

export default class Form extends React.Component {
	constructor() {
		super()
		this.state = {
			card: '',
			cv: '',
			name: ''
		}
		this.cardRef = React.createRef();
		this.cvRef = React.createRef();
	}
	changeHandler = (e) => {
		let value = e.target.value
		this.setState({ [e.target.name]: value }, () => {
			if (this.state.card.length >= 16) {
				this.cvRef.current.focus()
			}
		})
	}
	checkboxHandler = (e) => {
		let value = e.target.checked === true ?
			[localStorage.setItem('subscribe', this.state.subscribe = true),
			localStorage.setItem('email', this.state.email)] : ''
		this.setState({ [e.target.name]: value })
	}

	// emailIsValid = () => {
	// 	const re = /\S+@\S+\.\S+/
	// 	if (!re.test(this.state.email)) {
	// 		alert('email togri kirit')
	// 	}
	// }

	componentDidMount() {
		console.log('mount')
		this.cardRef.current.focus()
	}
	// ||
	// send = () => {
	// 	const { email, subscribe } = this.state
	// 	if (!email) {
	// 		alert('email ni toldirmaysanmi')
	// 	}
	// 	else if (!subscribe) {
	// 		alert('checkbox')
	// 	}
	// 	else if (!subscribe && !email) {
	// 		alert('malumotlarni toldir')
	// 	}
	// 	else {
	// 		alert('welcome')
	// 	}
	// }

	render() {
		const { card, cv } = this.state
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
					value={card}
					type="text"
					name="card"
					onChange={this.changeHandler}
					// onBlur={this.emailIsValid}
					ref={this.cardRef}
				/>
				<input
					placeholder="Email"
					value={cv}
					type="text"
					name="cv"
					onChange={this.changeHandler}
					ref={this.cvRef}
				/>
				{/* <select name="select" value={select} onChange={this.changeHandler}>
					<option disabled></option>
					<option value='1'>1</option>
					<option value='3'>3</option>
					<option value='4'>4</option>
				</select> */}
				<p>Are you agree our rules?</p>
				{/* <input name='subscribe' type='checkbox' checked={subscribe} onChange={this.checkboxHandler}></input> */}
				{/* <button onClick={this.send}>Send</button> */}
			</div>
		)
	}
}