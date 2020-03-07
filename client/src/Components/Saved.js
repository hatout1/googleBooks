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
      console.log(item.description);
      return (
        <div className="media searchResults" key={index}>
          <img src={item.image} className="align-self-center mr-3" alt=""></img>
          <div className="media-body">
            <h5 className="mt-0">Center-aligned media</h5>
            <p>{item.description}</p>
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
    const bookId = item.target.id;

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
