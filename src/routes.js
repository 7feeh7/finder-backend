const { Router } = require('express')
const yup = require('yup')

const SuggestionController = require('./controllers/SuggestionController')

const routes = Router()

routes.post('/search', SuggestionController.create)

module.exports = routes