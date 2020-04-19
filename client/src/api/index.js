import axios from 'axios'

// Use Heroku assigned backend port number or
// manually assigned port if not defined
var backEndPortNum = process.env.PORT || 5000
console.log(`Using back-end port ${backEndPortNum}`)


const apiBaseURL = `http://localhost:${backEndPortNum}/api/movies`
console.log(`API Base URL: ${apiBaseURL}`)

const api = axios.create({
    baseURL: apiBaseURL,
})

export const insertMovie = payload => api.post(`/movie`, payload)
export const getAllMovies = () => api.get(`/movies`)
export const updateMovieById = (id, payload) => api.put(`/movie/${id}`, payload)
export const deleteMovieById = id => api.delete(`/movie/${id}`)
export const getMovieById = id => api.get(`/movie/${id}`)

const apis = {
    insertMovie,
    getAllMovies,
    updateMovieById,
    deleteMovieById,
    getMovieById,
}

export default apis