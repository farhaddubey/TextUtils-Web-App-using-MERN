import React, { useState } from "react";

function Textform(props) {
  const [text, setText] = useState("Enter text here");
  const handleOnChange = (event) => {
    console.log("On changed is clicked");
    setText(event.target.value);
  };
  const handlerUpperCase = () => {
    console.log("Upper Case was clicked");
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLowerCase = () => {
    console.log("Lower Case was clicked");
    let newText = text.toLowerCase();
    setText(newText);
  };
  return (
    <>
      <div className="container">
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            {props.title}
          </label>
          <textarea
            className="form-control"
            value={text}
            id="exampleFormControlTextarea1"
            rows="3"
            placeholder={props.content}
            onChange={handleOnChange}
          ></textarea>
        </div>

        <button
          type="button"
          className="mx-2 my-2 btn btn-primary"
          onClick={handlerUpperCase}
        >
          Convert to Upper Case
        </button>
        <button
          type="button"
          className="mx-2 my-2 btn btn-secondary"
          onClick={handleLowerCase}
        >
          Convert to Lower Case
        </button>
        <button type="button" className="mx-2 my-2 btn btn-success">
          Reverse the text
        </button>
        <button type="button" className="mx-2 my-2 btn btn-danger">
          Remove Spaces
        </button>
        <button type="button" className="mx-2 my-2 btn btn-warning">
          Count No. of Words
        </button>
        <button type="button" className="mx-2 my-2 btn btn-info">
          Make Double
        </button>
        <button type="button" className="mx-2 my-2 btn btn-light">
          Change to Light Color
        </button>
        <button type="button" className="mx-2 my-2 btn btn-dark">
          Change to Dark Color
        </button>
      </div>
    </>
  );
}

export default Textform;
