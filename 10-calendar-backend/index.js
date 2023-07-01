const express = require('express')
const dbConnection = require('./database/config')
const cors = require('cors')
require('dotenv').config()

// Create express server (app)
const app = express()

// Connect to DB
dbConnection()

// CORS config
app.use(cors())

// Public directory
app.use( express.static('public') )

// Read - Write body
app.use( express.json() )

// Routes config
app.use('/api/auth', require('./routes/auth.routes'))
app.use('/api/events', require('./routes/event.routes'))

// Start to listen requests
const port = process.env.PORT
app.listen(port, () => {
  console.log(`App start listening at port ${port}`)
})