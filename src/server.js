const express = require('express')

const routes = require('./routes')

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    return res.status(200).send({
        title: 'Finder',
        version: '1.0.0'
    })
})

app.use(routes)

module.exports = app