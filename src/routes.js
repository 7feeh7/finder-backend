const { Router } = require('express')
const yup = require('yup')

const FilmController = require('./controllers/FilmController')

const routes = Router()

const linkSchema = yup.object({
    query: yup.object({ q: yup.string().min(3).required() }),
})

const validate = (schema) => async (req, res, next) => {
    try {
        await schema.validate({ params: req.params })
        return next()
    } catch (err) {
        return res.status(500).json({ type: err.name, message: err.message })
    }
};

routes.post('/search', validate(linkSchema), FilmController.create)

module.exports = routes