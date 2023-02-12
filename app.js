const express = require('express')
const cors = require('cors')
const contactRoutes = require('./app/routes/contact.route')

const app = express()

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.json({
        message: "Welcome to Contact Book application"
    })
})

app.use('/api/contacts', contactRoutes)

module.exports = app