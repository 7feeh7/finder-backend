const Suggestion = require('../models/Suggestion')

module.exports = {
    async create(data) {
        const suggestion = new Suggestion(data)
        return await suggestion.save()
    },
    async findOne(data) {
        return Suggestion.find({ suggestion: data })
    },
    async findAll(data) {
        const config = {}
        if (data) config = { suggestion: { $regex: '.*' + data + '.*' } }
        return Suggestion.find(config)
    }
}

