import { connect } from 'react-redux'
import Home from '../components/home'

const mapStateToProps = (state, ownProps) => {
	return {
		username: state.user.username
	}
}

const mapDispatchToProps = (dispatch, ownProps) => {
	return {

	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)