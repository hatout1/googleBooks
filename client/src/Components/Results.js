import React from "react";

function Results(props) {
  const books = props.data.books;

  // DATA();

  console.log(books);

  let bookArr = books.map((item, index) => {
    return (
      <div>
        <div className="image">
          <img src={item.image}></img>
        </div>
        <div className="bookInfo">
          <p key={item.id}>{item.title}</p>

          <p>{item.description}</p>
          <p>author(s)</p>
          <h5>{item.authors}</h5>
          <p>
            <a href={item.link}> More info ...</a>
          </p>
          <button
            onClick={event => {
              console.log("Hello");
            }}
          >
            Save
          </button>
        </div>
      </div>
    );
  });

  return <div>{bookArr}</div>;
}

export default Results;
