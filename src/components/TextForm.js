import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleUppercase = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLowercase = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleClear = () => {
    setText("");
  };

  const handleOriginal = () => {
    setText(text);
  };
  const handeOnchange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <div>
        <div className="container">
          <label htmlFor="myBox" className="form-label">
            <h5>{props.heading}</h5>
          </label>
          <textarea
            className="form-control"
            id="myBox"
            value={text}
            rows="8"
            onChange={handeOnchange}
          ></textarea>
        </div>
        <button className="btn btn-primary my-3 mx-1" onClick={handleUppercase}>
          Convert To Uppercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleLowercase}>
          Convert To Lowercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleClear}>
          Clear Text
        </button>
        <button className="btn btn-primary mx-1" onClick={handleOriginal}>
          Original Text
        </button>
      </div>

      <div className="container my-3">
        <h2>Your Text Summary</h2>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{text.split(" ").length * 0.008} minutes to read the text</p>
        <h3>Preview</h3>
        <p>{text}</p>
      </div>
    </>
  );
}
