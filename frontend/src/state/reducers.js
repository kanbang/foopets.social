import { combineReducers } from 'redux'

import {
	LOGIN_REQUEST,
	LOGIN_SUCCESS,
	SIGNUP_REQUEST,
	SIGNOUT
} from './actions'


const user = (state = {}, action) => {

	switch (action.type) {
		
		case LOGIN_REQUEST:
			return {}

		case LOGIN_SUCCESS:
			return { username: action.username, token: action.token }

		case SIGNUP_REQUEST:
			return { username: action.username }
			
		case SIGNOUT:
			return {}

		default:
			return state
	}

}

export default combineReducers({
	user
})
