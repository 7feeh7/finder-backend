const Suggestion = require('../models/Suggestion')

module.exports = {
    async create (data) {
        const teste = new Suggestion(data)
        return await teste.save()
    }
}

