
const mongoose = require('mongoose');
const { Schema } = mongoose

// This is a subdocument schema, it won't become its own model but we'll use it as the schema for the User's `savedBooks` array in User.js
const bookSchema = new Schema({
  // saved book id from GoogleBooks
  bookId: {
    type: String,
    required: true,
  },
  // Holds the authors for the book.
  authors: [
    {
      type: String,
    },
  ],
  // Holds the description for the book.
  description: {
    type: String,
    required: true,
  },
  // Holds the title for the book.
  title: {
    type: String,
    required: true,
  },
  // Holds the image for the book.
  image: {
    type: String,
  },
  // Holds the link for the book.
  link: {
    type: String,
  },
  
});

module.exports = bookSchema;
