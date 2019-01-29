const express = require('express')

// middlewares
const bodyParser = require('body-parser')
const jwt = require('express-jwt')

// routers
const authRouter = require('./routers/auth')

const api = express()

// enable middlewares
api.use(bodyParser.urlencoded({ extended: true }))
api.use(bodyParser.json())

api.use(jwt({ secret: 'secret' }).unless({
	path: [
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

// register routers
api.use('/auth', authRouter)

api.get('/protected', (req, res) => {
	res.send('greetings!')
})

// ready, set, go!
api.listen(3001)