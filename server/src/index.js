import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'

import movieDb from './db'
import { movieRouter } from './routes/movie-router'

// Set the port to listen to api requests
const apiPort = 4242
const printStr = `Server is running on port ${apiPort}...`

// Configure the express server and middleware
const server = express()
server.use(express.static('dist'))
server.use(bodyParser.urlencoded({extended: true}))
server.use(cors())
server.use(bodyParser.json())

// Subscribe to database events
movieDb.on('error', console.error.bind(console, 'MongoDB connection error:'))

// Provide endpoint for root level GET request
server.get('/', (req, res) => {
  res.send(printStr)
});

// Provide endpoint for api requests
server.use('/api', movieRouter)

// subscribe to requests at the specified reports and serve responses
// Note: since this is server-side code, this console.log prints to the command 
// line console, not the browser console.
server.listen(apiPort, () => console.log(printStr))
