const express = require('express')

const movieController = require('../controllers/movie-controller')

const router = express.Router()

router.post('/movie', movieController.createMovie)
router.put('/movie/:id', movieController.updateMovie)
router.delete('/movie/:id', movieController.deleteMovie)
router.get('/movie/:id', movieController.getMovieById)
router.get('/movies', movieController.getMovies)

exports.router = router