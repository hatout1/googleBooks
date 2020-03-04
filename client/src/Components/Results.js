import React from "react";

function Results(props) {
  const books = props.data.books;

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
              saveBook(event, item);
            }}
            id={item.id}
            data={item}
          >
            Save
          </button>
        </div>
      </div>
    );
  });

  function saveBook(event, item) {
    axios
      .post("/api/save", {
        id: item.id,
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

  return <div>{bookArr}</div>;
}

export default Results;
