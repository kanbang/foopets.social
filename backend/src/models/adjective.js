const mongoose = require('mongoose')

const adjectiveSchema = new mongoose.Schema({
	title: { type: String, required: true }, 
	value: { type: String, required: true }
})

module.exports = mongoose.model('Adjective', adjectiveSchema)