const express = require('express')

// middlewares
const bodyParser = require('body-parser')
const jwt = require('express-jwt')

// routers
const authRouter = require('./routers/auth')
const foopetsRouter = require('./routers/foopets')

const api = express()

// enable middlewares
api.use(bodyParser.urlencoded({ extended: true }))
api.use(bodyParser.json())


api.use(jwt({ secret: 'secret' }).unless({
	path: [
		'test',
		'/auth/login',
		'/auth/signup'
	]
}))

// overrides express-jwt default error response for a json one
api.use((err, req, res, next) => {
	if (err.name === 'UnauthorizedError') {
		res.status(401).json({
			msg: 'invalid token'
		})
	}
})

api.use('/test', (res,req) => {
	res.status(200).json({
		msg: 'greetings'
	})
})

// register routers
api.use('/auth', authRouter)
api.use('/foopets', foopetsRouter)

// ready, set, go!
api.listen(3001)