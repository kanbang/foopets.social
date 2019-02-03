import { combineReducers } from 'redux'

import {
	LOGIN_REQUEST,
	LOGIN_SUCCESS,
	LOGIN_ERROR,
	SIGNUP_REQUEST,
	SIGNUP_SUCCESS,
	SIGNUP_ERROR,
	LOGOUT,
	FETCH_FOOPETS_REQUEST,
	FETCH_FOOPETS_SUCCESS,
	FETCH_FOOPETS_ERROR,
	CREATE_FOOPET_REQUEST,
	CREATE_FOOPET_SUCCESS,
	CREATE_FOOPET_ERROR
} from './actions'


const user = (state = {}, action) => {

	switch (action.type) {
		
		case LOGIN_REQUEST:
			return {}

		case LOGIN_SUCCESS:
			localStorage.setItem('jwt', action.token)
			return { username: action.username }

		case LOGIN_ERROR:
			return { error: action.msg }

		case SIGNUP_REQUEST:
			return {}

		case SIGNUP_SUCCESS:
			return { username: action.username }

		case SIGNUP_ERROR:
			return {}
			
		case LOGOUT:
			localStorage.clear()
			return {}

		default:
			return state
	}

}

const foopets = (state = [], action) => {

	switch (action.type) {

		case FETCH_FOOPETS_REQUEST:
			return state
		
		case FETCH_FOOPETS_SUCCESS:
			return [
				...state,
				...action.foopets
			]

		case FETCH_FOOPETS_ERROR:
			return state
		
		case CREATE_FOOPET_REQUEST:
			return state

		case CREATE_FOOPET_SUCCESS:
			return [
				...state,
				...action.foopet
			]

		case CREATE_FOOPET_ERROR:
			return state

		default:
			return state
	}

}

export default combineReducers({
	user,
	foopets
})
