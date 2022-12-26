const express = require('express')

const mongoose = require('mongoose')

const routes = require('./routes')

const app = express()

require('dotenv').config()

mongoose.set('strictQuery', true)

mongoose.connect(process.env.MONGODB)

app.use(express.json())

app.get('/', (req, res) => res.status(200).send({
    title: 'Finder',
    version: '1.0.0'
}))

app.use(routes)

module.exports = app