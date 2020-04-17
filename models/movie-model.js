const mongoose = require('mongoose')

const MovieModel = new mongoose.Schema(
    {
        name: { type: String, required: true },
        time: { type: [String], required: true },
        rating: { type: Number, required: true },
    },
    { timestamps: true },
)

exports.Movie = mongoose.model('movies', MovieModel)
