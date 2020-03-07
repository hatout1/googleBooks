import axios from "axios";
import React, { useState } from "react";

import Results from "./Results";

function SearchForm() {
  const [value, modifier] = useState({ value: " " });
  let [book, booksModifier] = useState({ books: [] });

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
      booksModifier({ books: allBooks });
    });
  }

  return (
    <div>
      <div id="searchContainer">
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-4">Book Search</h1>
            <form>
              <div class="form-group bookSearch">
                <label for="exampleInputPassword1">Enter a book title:</label>
                <div className="inputform">
                  <input
                    type="text"
                    class="form-control"
                    id="exampleInputPassword1"
                    onChange={e => {
                      modifier({ value: e.target.value });
                    }}
                    placeholder="Book Title"
                    required
                  ></input>

                  <button
                    type="submit"
                    class="btn btn-primary"
                    onClick={e => {
                      e.preventDefault();
                      handleSearchClick();
                    }}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div>
          <Results data={book} />
        </div>
      </div>
    </div>
  );
}

export default SearchForm;
