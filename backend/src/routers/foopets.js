const express = require('express')
const router = express.Router()

// database and models
const _ = require('../database')

const Foopet = require('../models/foopet')
const User = require('../models/user')


router.get('/username/:username', (req, res) => {

	const { username } = req.params

	User.findOne({ username }, (err, user) => {

		if (err) return res.status(500).json({ msg: 'server error' })

		if (!user) {
			return res.status(401).json({ msg: 'user not found' })
		}

		Foopet.find({ owner_id: user._id }, (err, foopets) => {

			if (err) return res.status(500).json({ msg: 'server error' })

			res.json({ foopets })
		})

	})
	
})

router.post('/create', (req, res) => {
	
	const { name, avatar_url } = req.body

	if (!name) res.status(400).json({ msg: 'name missing' })
	if (!avatar_url) res.status(400).json({ msg: 'avatar_url missing' })

	Foopet.create({ name, avatar_url, owner_id: req.user.userId }, (err, foopet) => {
		if (err) return res.status(500).json({ msg: 'server error' })
		
		res.json(foopet)
	})

})

module.exports = router