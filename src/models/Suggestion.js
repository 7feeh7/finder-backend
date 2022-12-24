const mongoose = require('mongoose')

const SuggestionSchema = new mongoose.Schema({ suggestion: String })

module.exports = mongoose.model('Suggestion', SuggestionSchema)