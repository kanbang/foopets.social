import axios from "axios";

// user actions

export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const loginRequest = () => {
	return {
		type: LOGIN_REQUEST
	}
}

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const loginSuccess = (username, token) => {
	return {
		type: LOGIN_SUCCESS,
		username,
		token
	}
}

export const SIGNUP_REQUEST = 'SIGNUP_REQUEST'
export const signupRequest = (name, username, password) => {
	return {
		type: SIGNUP_REQUEST,
		name,
		username,
		password
	}
}

export const SIGNOUT = 'SIGNOUT'
export const signout = () => {
	return {
		type: SIGNOUT
	}
}

// user interaction triggered actions

export const LOGIN = 'LOGIN'
export const login = (username, password) => dispatch => {
	dispatch(loginRequest())
	return axios.post('/auth/login', { username, password }).then(res => {
		const { username, token } = res.data
		dispatch(loginSuccess(username, token))
	}).catch(err => {
		console.log(err)
	})
}

export const SIGNUP = 'SIGNUP'
export const signup = (name, username, password) => dispatch => {
	dispatch(signupRequest(name, username, password))
	return axios.post('/auth/signup', { name, username, password }).then(res => {
		const { username, token } = res.data
		dispatch(loginSuccess(username, token))
	}).catch(err => {
		console.log(err)
	})
}