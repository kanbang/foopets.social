import { connect } from 'react-redux'
import FoopetCreator from '../components/foopet-creator'

import {
	createFoopet
} from '../state/actions'

const mapStateToProps = (state, ownProps) => {
	return {
		
	}
}

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		onSubmit: (foopet) => {
			dispatch(createFoopet(foopet))
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(FoopetCreator)