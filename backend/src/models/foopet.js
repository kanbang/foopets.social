const mongoose = require('mongoose')
const ObjectId = mongoose.ObjectId

const foopetSchema = new mongoose.Schema({
	name: {	type: String, required: true },
	avatar_url: { type: String, required: true },
	owner_id: { type: ObjectId, required: true },
	description: [ ObjectId ]
})

module.exports = mongoose.model('Foopet', foopetSchema)