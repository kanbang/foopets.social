import React from 'react'

import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import reducers from './state/reducers'

import { BrowserRouter as Router, Route } from 'react-router-dom'

import { Grommet } from 'grommet'
import theme from './theme'

import Landing from './containers/landing'
import Home from './containers/home'


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(reducers, composeEnhancers(
	applyMiddleware(thunkMiddleware)
))

export default (props) => (
	<Provider store={store}>
		<Grommet theme={theme}>
			<Router>
				<div>
					<Route exact path='/' component={Landing} />
					<Route exact path='/home' component={Home} />
				</div>
			</Router>
		</Grommet>
	</Provider>
)
