import React from "react";

function Results(props) {
  const Books = props.data.books[0];

  // let DATA = props => {
  //   props.Array.map((res, i) => {
  //     console.log(i);
  //   });
  // };

  // DATA();

  console.log(Books);

  return (
    <div>
      <h1> Hello From Results </h1>
    </div>
  );
}

export default Results;
