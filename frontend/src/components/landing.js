import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

import { Box, Button, Heading } from 'grommet'

import monster from '../imgs/monster.svg'

import LoginForm from '../containers/login-form'
import SignupForm from '../containers/signup-form' 

export default class extends Component {

	state = {
		doing: 'watching'
	}

	showLoginForm = () => {
		this.setState({ doing: 'loging-in' })
	}

	showSignupForm = () => {
		this.setState({ doing: 'signing-up' })
	}

	watch = () => {
		this.setState({ doing: 'watching '})
	}

	render() {

		if (this.props.isUserLogged)
			return <Redirect to='/home' />

		return (
			<Box align='center' gap='small'>
				<Heading>Welcome to foopets</Heading>
				<img src={monster} alt='monster' />
				
				<Button label='Log in' color='accent-1' onClick={this.showLoginForm} />
				<Button label='Sign up' color='accent-2' onClick={this.showSignupForm} />

				{this.state.doing === 'loging-in' && <LoginForm onClose={this.watch} />}
				{this.state.doing === 'signing-up' && <SignupForm onClose={this.watch} />}
			</Box>
		)
	}
	
}