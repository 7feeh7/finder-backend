const { Router } = require('express')

const Suggestion= require('./controllers/SuggestionController')

const routes = Router()

const validation = require('./middlewares/validationSchema')
const suggestionSchema = require('./validations/suggestion')

routes.post('/search', validation(suggestionSchema), async (req, res) => {
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