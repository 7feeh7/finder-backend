const { Router } = require('express')

const Suggestion= require('./controllers/SuggestionController')

const routes = Router()

routes.post('/search', async (req, res) => {
    const suggestion = new Suggestion(req, res)
    const response = await suggestion.create()
    return response
})

routes.get('/search', async (req, res) => {
    const suggestion = new Suggestion(req, res)
    const response = await suggestion.get()
    return response
})

module.exports = routes