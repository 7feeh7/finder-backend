const express = require('express')

const mongoose = require('mongoose')

const routes = require('./routes')

const app = express()

mongoose.set('strictQuery', true)

mongoose
    .connect('mongodb+srv://admin:admin@cluster0.zb36i.mongodb.net/starlight?retryWrites=true&w=majority')

app.use(express.json())

app.get('/', (req, res) => {
    return res.status(200).send({
        title: 'Finder',
        version: '1.0.0'
    })
})

app.use(routes)

module.exports = app