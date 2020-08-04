const express = require('express');
const router = express.Router(); 

//Item Model
const Book = require('../../models/Book');

//@route GET api/books
//@desc  GET all items
//@access Public
router.get('/', (req, res) => {
    Book.find()
        .sort({ date: -1 })
        .then(books => res.json(books))
});
//@route POST api/books
//@desc  Create A Book
//@access Public
router.post('/', (req, res) => {
    const {id, title, authors, description, link, thumbnail } = req.body.newBook;

    const newBook = new Book({
        id: id,
        title,
        authors: authors,
        description: description,
        link: link,
        thumbnail

    });

    newBook.save().then(book => res.json(book))
});
//@route DELETE api/books/:id
//@desc  Delete A Book
//@access Public
router.delete('/:id', (req, res) => {
    console.log(req.params.id);
    Book.findById(req.params.id)
        .then(book => book.remove().then(() => res.json({ success: true })))
        .catch(err => res.status(404).json({ success: false }));
});



module.exports = router;