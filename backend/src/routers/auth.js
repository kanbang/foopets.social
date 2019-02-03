const express = require('express')
const router = express.Router()

// database and models
const _ = require('../database')
const User = require('../models/user')

const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const rounds = 10;


router.post('/login', (req, res) => {

	const username = req.body.username;
	const password = req.body.password;

	if (!username) return res.status(400).json({ msg: 'username missing' })
	if (!password) return res.status(400).json({ msg: 'password missing' })

	User.findOne({ username }, (err, user) => {
		
		if (err) return	res.status(500).json({ msg: 'server error' })

		if (!user) return res.status(401).json({ msg: 'user not found' })

		bcrypt.compare(password, user.password_hash).then(valid => {
			if (!valid) return res.status(401).json({ msg: 'invalid password' })

			jwt.sign({ userId: user.id }, 'secret', (err, token) => {
				if (err) return res.status(500).json({ msg: 'oops' })

				res.json({ username: user.username, token })
			})
		})
	})
})

router.post('/signup', (req, res) => {

	const username = req.body.username;
	const password = req.body.password;

	if (!username) return res.status(400).json({ msg: 'username missing' })
	if (!password) return res.status(400).json({ msg: 'password missing' })

	bcrypt.hash(password, rounds, (err, password_hash) => {
		if (err) return res.status(500).json({ msg: 'error hashing' })

		User.create({ username, password_hash }, (err, user) => {
			if (err) return	res.status(400).json({ msg: 'error in fields or already exists' })

			jwt.sign({ userId: user.id }, 'secret', (err, token) => {
				
				if(err) return res.status(500).json({ msg: 'error jwt' })

				res.json({ username: user.username, token })
			})
		})
	})
})

module.exports = router