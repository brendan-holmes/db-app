import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import path from 'path'

import movieDb from './db'
import { movieRouter } from './routes/movie-router'

// Set the port to listen to api requests
const port = process.env.NODE_ENV || 5000
const printStr = `Server is running on port ${port}. 
                  Set environment mode to production to serve client from this port.`

// Configure the express server and middleware
const server = express()
server.use(bodyParser.urlencoded({extended: true}))
server.use(cors())
server.use(bodyParser.json())

// Serve static client assets if in production mode
if (process.env.NODE_ENV === 'production') {
  server.use(express.static('client/build'));
  
  server.get('*', (req, res) => {
    res.sendFile(path.resolve(path.__dirname, 'client', 'build', 'index.js'));
  });
} 
else {
  // else (i.e. in dev mode, serve some placeholder text)
  server.get('/', (req, res) => {
    res.send(printStr)
  });
}

// Subscribe to database events
movieDb.on('error', console.error.bind(console, 'MongoDB connection error:'))

// Server api requests
server.use('/api', movieRouter)

// subscribe to requests at the specified reports and serve responses
// Note: since this is server-side code, this console.log prints to the command 
// line console, not the browser console.
server.listen(port, () => console.log(printStr))
