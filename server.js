const app = require('./app')
const config = require('./app/config')
const MongoDB = require('./app/utils/mongodb.util')

// connect to database
async function startServer () {
    try {
        await MongoDB.connect(config.db.uri)
        console.log('Connected to the database.')
        
        // start server
        const PORT = config.app.port
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}.`)
        })
    } catch (err) {
        console.log('Database connection failed.')
        console.log(err)
    }
}

startServer();