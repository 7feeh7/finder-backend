const repository = require('../repositories/suggestion-repository')

class Suggestion {
    constructor(request, response){
        this.request = request
        this.response = response
    }

    async create() {
        const { q } = this.request.query
        await repository.create({ suggestion: q })
        return this.response.status(200).send()
    }

    async get() {
        const { q } = this.request.query
        const suggestion = await repository.getAllSuggestions(q)
        return this.response.status(200).send(suggestion)
    }
}

module.exports = Suggestion
