import { connect } from 'react-redux'
import Landing from '../components/landing'

const mapStateToProps = (state, ownProps) => {
	return {
		isUserLogged: state.user.username !== undefined
	}
}

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Landing)