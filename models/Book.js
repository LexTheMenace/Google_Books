const mongoose = require('mongoose');
const Schema = mongoose.Schema; 

const BookSchema = new Schema({

    title: {
        type: String,
        required: true
    },
    dateSaved: {
        type: Date,
        default: Date.now
    },
    author: {
        type: String
    },
    description: String,
    link: {
        type: String
    }
})

module.exports = Book = mongoose.model('book', BookSchema)