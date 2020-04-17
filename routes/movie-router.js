const express = require('express')

const movieController = require('../controllers/movie-controller')

const movieRouter = express.Router()

movieRouter.post('/movie', movieController.createMovie)
movieRouter.put('/movie/:id', movieController.updateMovie)
movieRouter.delete('/movie/:id', movieController.deleteMovie)
movieRouter.get('/movie/:id', movieController.getMovieById)
movieRouter.get('/movies', movieController.getMovies)

exports.movieRouter = movieRouter