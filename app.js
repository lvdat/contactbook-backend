const express = require('express')
const cors = require('cors')
const contactRoutes = require('./app/routes/contact.route')
const ApiError = require('./app/api-error')

const app = express()

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.json({
        message: "Welcome to Contact Book application"
    })
})

app.use('/api/contacts', contactRoutes)

// handle 404 error
app.use((req, res, next) => {
    next(new ApiError(404, 'Resource not found'))
})

// handle errors
app.use((err, req, res, next) => {
    return res.status(err.statusCode || 500).json({
        message: err.message || 'Internal Server Error'
    })
})


module.exports = app