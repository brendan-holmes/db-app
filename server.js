const express = require( 'express')
const bodyParser = require( 'body-parser')
const cors = require( 'cors')
const path = require( 'path')
const mongoose = require('mongoose')

const movies = require( './routes/api/movie-router')
//const items = require('./routes/api/items')

const app = express()

// Configure the express server and middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())

// DB Config
const db = require('./config/keys').mongoURI

// Connect to Mongo Database
mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.log(err))

// Subscribe to database events
mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'))

// Use routes
app.use('/api/movies', movies.router)
//app.use('/api/items', items.router)

// Set the server port
const port = process.env.PORT || 5000

app.listen(port, () => console.log(`Server started on port ${port}.`))

// Serve static client assets if in production mode
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(path.__dirname, 'client', 'build', 'index.js'));
  });
} 
else {
  // else (i.e. in dev mode, serve some placeholder text)
  app.get('/', (req, res) => {
    res.send('Server running in dev mode. Start client using \'npm run dev-client\'...')
  });
}
