import { connect } from 'react-redux'
import Home from '../components/home'

const mapStateToProps = (state, ownProps) => {
	return {
		foopets: state.foopets
	}
}

const mapDispatchToProps = (dispatch, ownProps) => {
	return {

	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)