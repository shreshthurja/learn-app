import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("Enter text here");
  const handleUppercase = () => {
    // setText(text.toUpperCase());
    // console.log("Upper case was clicked");
    // setText("You have clicked uppercase");
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handeOnchange = (event) => {
    // console.log("Onchange handler");
    setText(event.target.value);
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setText(text.toUpperCase());
  // };

  return (
    <div>
      <div className="mb-3">
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
      <button className="btn btn-primary" onClick={handleUppercase}>
        Convert To Uppercase
      </button>
    </div>
  );
}
