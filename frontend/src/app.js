import React from 'react'

import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import reducers from './state/reducers'

import { loadState, saveState } from './state/localStorage'
import throttle from 'lodash/throttle'

import { BrowserRouter as Router, Route } from 'react-router-dom'

import { Grommet } from 'grommet'
import theme from './theme'

import Layout from './containers/layout'
import Landing from './containers/landing'
import Home from './containers/home'
import FoopetCreator from './containers/foopet-creator'


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const persistedState = loadState()

const store = createStore(reducers, persistedState, composeEnhancers(
	applyMiddleware(thunkMiddleware)
))

store.subscribe(throttle(() => {
	saveState(store.getState())
}, 1000))

export default (props) => (
	<Provider store={store}>
		<Grommet theme={theme}>
			<Router>
				<div>
					<Route exact path='/' component={Landing} />
					<Route exact path='/home' render={ props => 
						(<Layout><Home/></Layout>)} 
					/>
					<Route exact path='/new' render={props => 
						(<Layout><FoopetCreator id={'uwu'}/></Layout>)} 
					/>
				</div>
			</Router>
		</Grommet>
	</Provider>
)
