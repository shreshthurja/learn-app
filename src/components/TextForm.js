import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleUppercase = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to upper case", "success");
  };

  const handleLowercase = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lower case", "success");
  };

  const handleClear = () => {
    setText("");
    props.showAlert("Cleared", "success");
  };

  const handleOriginal = () => {
    setText(text);
  };
  const handeOnchange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <label htmlFor="myBox" className="form-label">
          <h5>{props.heading}</h5>
        </label>
        <textarea
          className="form-control"
          id="myBox"
          value={text}
          rows="8"
          onChange={handeOnchange}
          style={{ backgroundColor: props.mode === "light" ? "white" : "grey" }}
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

      <div
        className="container my-3"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
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
