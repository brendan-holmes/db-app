import { Schema, model as mongooseModel} from 'mongoose'

const Movie = new Schema(
    {
        name: { type: String, required: true },
        time: { type: [String], required: true },
        rating: { type: Number, required: true },
    },
    { timestamps: true },
)

// Export a Mongoose Model
/*
Note: this package will be included using:
import Movie from './movie-model'
which might create some ambiguity between the 
Mongoose Movie object and the local Movie variable
in this file.
*/
export default mongooseModel('movies', Movie)
