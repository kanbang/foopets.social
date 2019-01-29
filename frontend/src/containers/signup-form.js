import { connect } from 'react-redux'
import { signup } from '../state/actions'

import SignupForm from '../components/signup-form'

const mapStateToProps = (state, ownProps) => {
	return {

	}
}

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		onSubmit: ({ value: data }) => {
			const { name, username, password } = data
			dispatch(signup(name, username, password))
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm)
