import React, { useState } from "react";

function SearchForm() {
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
