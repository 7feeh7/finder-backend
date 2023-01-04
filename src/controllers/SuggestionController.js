const repository = require('../repositories/suggestion-repository')

class Suggestion {
    constructor(request, response){
        this.request = request
        this.response = response
    }

    async create() {
        try {
            const { suggestion } = this.request.body

            const isExists = await repository.get(suggestion)

            if(isExists.length){
                return this.response.status(400).json({ msg: "Sugestão ja cadastrada" })
            }

            const data = await repository.create({ suggestion })

            return this.response.status(200).json(data)
        } catch (err) {
            console.error(err)
            return this.response.status(500).json({ msg: "Erro no servidor" })
        }
    }

    async get() {
        const { q } = this.request.query
        const suggestion = await repository.getAll(q)
        return this.response.status(200).send(suggestion)
    }
}

module.exports = Suggestion
