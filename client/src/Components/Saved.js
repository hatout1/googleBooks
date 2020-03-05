import React, { useState, useEffect } from "react";
import axios from "axios";

function Saved() {
  const [books, booksModifier] = useState({ saved: [] });

  useEffect(() => {
    axios
      .get("/allSaved")
      .then(items => {
        booksModifier({ saved: items });
      })
      .catch(err => console.log(err));
  }, []);

  const renderBooks = () => {
    // let savedBooks = books.saved.data;
    let savedArr = !books.saved.data ? [] : books.saved.data;
    // console.log(savedBooks);

    return savedArr.map((item, index) => {
      return (
        <div className="searchResults" key={index}>
          <div className="image">
            <img src={item.image}></img>
          </div>
          <div className="bookInfo">
            <p>{item.discreption}</p>
            {/* <p>author(s)</p>
            <h5>{item.authors}</h5> */}
            <p>
              <a href={item.link}> More info ...</a>
            </p>
            <button
              onClick={event => {
                event.preventDefault();
                console.log("will be deleted");
                deleteSaveBook(event, item);
              }}
              id={item._id}
              data={item}
            >
              Delete !!!
            </button>
          </div>
        </div>
      );
    });
  };

  function deleteSaveBook(item) {
    let bookId = item.target.id;

    axios.delete(`/delete/${bookId}`).then(result => {
      axios.get("/allSaved").then(res => {
        booksModifier({ saved: res });
      });
    });
  }

  return (
    <div>
      {/* <h1>Hello</h1> */}
      <div>{renderBooks()}</div>
    </div>
  );
}

export default Saved;
