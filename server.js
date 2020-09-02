// Dependencies
const express = require('express')

//config
const app = express()
require('dotenv').config()
const PORT = process.env.PORT || 3333

// middleware
// use the public folder
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true}))

// controllers
const marketController = require('./controllers/marketController')
app.use('/markets', marketController)

//home route
app.get('/', (req, res) => {
    res.redirect('/markets')
})

app.listen(PORT, () => {
    console.log('Listening on port:', PORT)
})

module.exports = app;