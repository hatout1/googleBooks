import React from "react";
import axios from "axios";

function Results(props) {
  const books = props.data.books;

  console.log(books);

  let bookArr = books.map((item, index) => {
    return (
      <div className="searchResults" key={item.id}>
        <div className="image">
          <img src={item.image}></img>
          <button
            className="XXX btn btn-outline-success"
            onClick={event => {
              saveBook(event, item);
            }}
            id={item.id}
            data={item}
          >
            Save
          </button>
        </div>
        <div className="bookInfo">
          <h3 key={item.id}>{item.title}</h3>
          <p>author(s)</p>
          <h5>{item.authors}</h5>
          <p>
            <a className="moreInfoTag" href={item.link}>
              {" "}
              More info ...
            </a>
          </p>
          <div data-spy="scroll" data-target={item.description} data-offset="0">
            <h4>Description</h4>
            <p className="moreInfoDiv">{item.description}</p>
          </div>
        </div>
      </div>
    );
  });

  function saveBook(event, item) {
    axios
      .post("/save", {
        bookid: item.id,
        title: item.title,
        authors: item.authors,
        description: item.description,
        image: item.image,
        link: item.link
      })
      .catch(err => {
        if (err) {
          console.log(err);
        }
      });
  }

  return <div className="resultDisplayDiv">{bookArr}</div>;
}

export default Results;
