const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let BookSchema = new Schema({
  bookid: {
    type: String
  },
  title: {
    type: String,
    required: true
  },
  authors: {
    type: String
  },
  description: {
    type: String
  },
  image: {
    type: String
  },
  link: {
    type: String
  }
});

const Book = mongoose.model("Book", BookSchema);

module.exports = Book;
