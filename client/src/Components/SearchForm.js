import axios from "axios";
import React, { useState } from "react";

import Results from "./Results";

function SearchForm() {
  const [value, modifier] = useState({ value: "" });
  const [book, booksModifier] = useState({ books: [] });

  function handleSearchClick() {
    let url = `https://www.googleapis.com/books/v1/volumes?q=${value.value}`;

    axios.get(url).then(res => {
      console.log(res);
      let booksData = res.data.items;
      let allBooks = [];
      for (let i = 0; i < booksData.length; i++) {
        let book = {};
        let info = booksData[i].volumeInfo;
        book["id"] = booksData[i].id;
        book["title"] = info.title;
        book["authors"] = info.authors;
        book["description"] = info.description;
        book["image"] = info.imageLinks.thumbnail;
        book["link"] = info.infoLink;
        allBooks.push(book);
      }
      booksModifier({ books: [allBooks] });
    });
  }

  return (
    <div>
      <div id="searchContainer">
        <h3>Book Search</h3>
        <form id="bookSearch">
          <label htmlFor="bookInput" form="bookSearch">
            Enter a book title:
          </label>
          <br></br>
          <input
            type="text"
            name="bookInput"
            id="bookInput"
            form="bookSearch"
            onChange={e => {
              modifier({ value: e.target.value });
            }}
            placeholder="Book Title"
            required
          />
          <br></br>
          <button
            type="submit"
            onClick={e => {
              e.preventDefault();
              handleSearchClick();
            }}
          >
            Search!!
          </button>
        </form>
        <div>
          <Results />
        </div>
      </div>
    </div>
  );
}

export default SearchForm;
