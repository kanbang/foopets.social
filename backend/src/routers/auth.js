const express = require('express')
const router = express.Router()

// database and models
const db = require('../database')
const User = require('../models/user')

const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const rounds = 10;


router.post('/login', (req, res) => {
	const username = req.body.username;
	const password = req.body.password;

	if (!username || !password) {
		res.status(400).json({ msg: 'field missing' })
		return
	}

	User.findOne({ username:username }, (err, user) => {
		if (err || !user) {
			res.status(401).json({ msg: 'user not found' })
			return
		}
		
		bcrypt.compare(password, user.passwordHash).then(valid => {
			if (!valid) {
				res.status(401).json({ msg: 'invalid credentials' })
				return
			}

			jwt.sign({ userId: user.id }, 'secret', (err, token) => {
				if (err) {
					res.status(500).json({ msg: 'oops' })
					return
				}

				res.json({ username: user.username, token })
			})
		})
	})
})

router.post('/signup', (req, res) => {

	const username = req.body.username;
	const password = req.body.password;

	if (!username || !password) {
		res.status(400).json({ msg: 'field missing' })
		return
	}

	bcrypt.hash(password, rounds, (err, passwordHash) => {
		if (err) {
			res.status(500).json({ msg: 'error hashing' })
			return
		}

		User.create({ username, passwordHash }, (err, user) => {
			if (err) {
				res.status(400).json({ msg: 'error in fields or already exists' })
				return
			}

			jwt.sign({ userId: user.id }, 'secret', (err, token) => {
				if(err) {
					res.status(500).json({ msg: 'error jwt' })
					return;
				}

				res.json({ username: user.username, token })
			})
		})
	})
})

module.exports = router