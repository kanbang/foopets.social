import _axios from 'axios'

const axios = _axios.create({
	headers: { 'Authorization': 'Bearer ' + localStorage.getItem('jwt') || '' }
})

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

export const LOGIN_ERROR = 'LOGIN_ERROR'
export const loginError = (error) => {
	return {
		type: LOGIN_ERROR,
		msg: error
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

export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS'
export const signupSuccess = () => {
	return {
		type: SIGNUP_SUCCESS
	}
}

export const SIGNUP_ERROR = 'SIGNUP_ERROR'
export const signupError = (error) => {
	return {
		type: SIGNUP_ERROR
	}
}

export const LOGOUT = 'LOGOUT'
export const logout = () => {
	return {
		type: LOGOUT
	}
}

export const FETCH_FOOPETS_REQUEST = 'FETCH_FOOPETS_REQUEST'
export const fetchFoopetsRequest = () => {
	return {
		type: FETCH_FOOPETS_REQUEST
	}
}

export const FETCH_FOOPETS_SUCCESS = 'FETCH_FOOPETS_SUCCESS'
export const fetchFoopetsSuccess = (foopets) => {
	return {
		type: FETCH_FOOPETS_SUCCESS,
		foopets
	}
}

export const FETCH_FOOPETS_ERROR = 'FETCH_FOOPETS_ERROR'
export const fetchFoopetsError = (error) => { 
	return { 
		type: FETCH_FOOPETS_ERROR
	} 
}

export const CREATE_FOOPET_REQUEST = 'CREATE_FOOPET_REQUEST'
export const createFoopetRequest = (foopet) => {
	return {
		type: CREATE_FOOPET_REQUEST,
		foopet
	}
}

export const CREATE_FOOPET_SUCCESS = 'CREATE_FOOPET_SUCCESS'
export const createFoopetSuccess = (foopet) => {
	return {
		type: CREATE_FOOPET_SUCCESS,
		foopet
	}
}

export const CREATE_FOOPET_ERROR = 'CREATE_FOOPET_ERROR'
export const createFoopetError = (error) => {
	return {
		type: CREATE_FOOPET_ERROR,
		error
	}
}


// user interaction triggered actions

export const LOGIN = 'LOGIN'
export const login = (username, password) => dispatch => {
	dispatch(loginRequest())
	return axios.post('/auth/login', { username, password }).then(res => {
		const { username, token } = res.data
		dispatch(loginSuccess(username, token))
		dispatch(fetchFoopets(username))
	}).catch(err => {
		dispatch(loginError(err.response.data.msg))
	})
}

export const SIGNUP = 'SIGNUP'
export const signup = (name, username, password) => dispatch => {
	dispatch(signupRequest(name, username, password))
	return axios.post('/auth/signup', { name, username, password }).then(res => {
		const { token } = res.data
		dispatch(loginSuccess(username, token))
	}).catch(err => {
		dispatch(signupError(err.response.data.msg))
	})
}

export const FETCH_FOOPETS = 'FETCH_FOOPETS'
export const fetchFoopets = (username) => dispatch => {
	dispatch(fetchFoopetsRequest())
	return axios.get('/foopets/username/' + username).then(res => {
		dispatch(fetchFoopetsSuccess(res.data.foopets))
	}).catch(err => {
		dispatch(fetchFoopetsError(err.response.data.msg))
	})
}

export const CREATE_FOOPET = 'CREATE_FOOPET'
export const createFoopet = (foopet) => dispatch => {
	console.log('posting foopet to the backend: ', foopet)
	dispatch(createFoopetRequest())
	return axios.post('/foopets/create', foopet).then(res => {
		console.log('success, server returned ', res.data)
		dispatch(createFoopetSuccess(foopet))
	}).catch(err => {
		dispatch(createFoopetError('There was a problem with the foopet'))
	})
}