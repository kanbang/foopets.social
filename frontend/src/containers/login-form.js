import { connect } from 'react-redux'
import { login } from '../state/actions'

import LoginForm from '../components/login-form'

const mapStateToProps = (state, ownProps) => {
	return {
		
	}
}

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		onSubmit: ({ value: data }) => {
			const { username, password } = data
			dispatch(login(username, password))
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)
