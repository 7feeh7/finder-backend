const Suggestion = require('../models/Suggestion')

module.exports = {
    async create(data) {
        const suggestion = new Suggestion(data)
        return await suggestion.save()
    },
    async get(data) {
        return Suggestion.find({ suggestion: data })
    },
    async getAll(data) {
        let config = {}
        if (data) config = { suggestion: { $regex: `.*${data}.*` } }
        return Suggestion.find(config).sort( { "suggestion": 1 } ).limit(3)
    }
}

