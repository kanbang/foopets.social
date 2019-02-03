import { connect } from 'react-redux'
import Layout from '../components/layout'

import {
	logout
} from '../state/actions'

const mapStateToProps = (state, ownProps) => {
	return {
		username: state.user.username,
		...ownProps
	}
}

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		onLogout: () => dispatch(logout())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout)