const mongoose = require('mongoose');
const Schema = mongoose.Schema; 

const BookSchema = new Schema({
    id: String,
    title: {
        type: String,
        required: true
    },
    dateSaved: {
        type: Date,
        default: Date.now
    },
    authors: String,
    description: String,
    link: {
        type: String
    },
    thumbnail: {
        type: String
    }
})

module.exports = Book = mongoose.model('book', BookSchema)