const mongoose = require('mongoose')

const dbUrl = 'mongodb://foo:barbar1@ds115595.mlab.com:15595/foopets-social'

mongoose.connect(dbUrl)
mongoose.Promise = global.Promise

const connection = mongoose.connection
connection.on('error', console.error.bind(console, 'MongoDB connection error:'))

module.exports = connection