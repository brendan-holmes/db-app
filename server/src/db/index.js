import { connect, connection } from 'mongoose'

connect('mongodb://127.0.0.1:27017/cinema', { useNewUrlParser: true,  useUnifiedTopology: true})
    .catch(e => {
        console.error('Connection error', e.message)
    })

const movieDb = connection

export default movieDb