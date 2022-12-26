const Suggestion = require('../models/Suggestion')

module.exports = {
    async create(data) {
        const suggestion = new Suggestion(data)
        return await suggestion.save()
    },
    async getAllSuggestions(q) {
        const config = {}
        if (q) config = { suggestion: { $regex: '.*' + q + '.*' } }
        return Suggestion.find(config)
    }
}

