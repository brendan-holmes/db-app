import { Router } from 'express'

import { createMovie, updateMovie, deleteMovie, getMovieById, getMovies } from '../controllers/movie-controller'

const movieRouter = Router()

movieRouter.post('/movie', createMovie)
movieRouter.put('/movie/:id', updateMovie)
movieRouter.delete('/movie/:id', deleteMovie)
movieRouter.get('/movie/:id', getMovieById)
movieRouter.get('/movies', getMovies)

export { movieRouter }