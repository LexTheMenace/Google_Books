const express = require("express");
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const books = require('./routes/api/books');

// Body Parser MiddleWare
app.use(bodyParser.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
  }
// DB Config 
const db = require('./config/keys').mongoURI;
//connect
mongoose
    .connect(db)
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err))

//Use Routes
app.use('/api/books', books)

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => 
console.log(`Server started at http://localhost:${PORT}`))