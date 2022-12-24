const repository = require('../repositories/suggestion-repository')

module.exports = {
    async create(req, res) {
        try {
            const { q } = req.query;

            await repository.create({ suggestion: q })
            return res.status(200).send()
        } catch (err) {
            console.error(err)
        }
    }
}