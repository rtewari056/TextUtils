import React, { useState } from "react";
import PropTypes from "prop-types";

// Using inline CSS
const cardStyle = {
  maxWidth: "60rem",
};

export default function TextForm(props) {
  const [text, setText] = useState("");

  const clearText = () => {
    setText("");
    props.showAlert("Text has been cleared", "success");
  };
  
  const copyText = () => {
    navigator.clipboard.writeText(text); // Copy to clipboard the value stored inside "text"
    props.showAlert("Copied to clipboard", "success");
  };
  
  const convertToUppercase = () => {
    // console.log('convertToUppercase button clicked');
    let convertedText = text.toUpperCase();
    setText(convertedText);
    props.showAlert("Converted to uppercase", "success");
  };
  
  const convertToLowercase = () => {
    let convertedText = text.toLowerCase();
    setText(convertedText);
    props.showAlert("Converted to lowercase", "success");
  };

  const handleOnChange = (event) => {
    // console.log('handleOnChange invoked');
    setText(event.target.value);
  };

  const countWords = () => {
    return text.split(' ').filter(a => a.trim()).length;
  };

  const countCharacters = () => {
    /*
    Algorithm:
      1. Split by single space between words.
      2. Filter each element of array by removing whitespace from both sides of a string using trim() method
      3. Then join the array of strings
      4. If there is any linebreak(\n) present then split again
      5. Then join the strings again
      6. Then calculate the length of the string
    */
    return text.split(' ').filter(a => a.trim()).join("").split("\n").join("").length;
  };

  return (
    <>
      <div className="container my-5" style={cardStyle}>
        <div className={`card text-bg-${props.themeMode==="primary"?"light":"dark"} border-${props.themeMode==="primary"?"dark":"light"} mb-3`}>
          <h4 className="card-header">{props.heading}</h4>
          <div className={`card-body text-light`}>
            <textarea
              className="form-control"
              id="myTextBox"
              rows="8"
              value={text}
              onChange={handleOnChange}
              placeholder={"Enter text here"}
            ></textarea>
            <div className="boxButton">
              <button
                type="button"
                className="btn btn-danger me-2 mt-3"
                onClick={clearText}
              >
                Clear text
              </button>
              <button
                type="button"
                className="btn btn-primary me-2 mt-3"
                onClick={copyText}
              >
                Copy text
              </button>
              <button
                type="button"
                className="btn btn-primary me-2 mt-3"
                onClick={convertToUppercase}
              >
                Convert to uppercase
              </button>
              <button
                type="button"
                className="btn btn-primary me-2 mt-3"
                onClick={convertToLowercase}
              >
                Convert to lowercase
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container" style={cardStyle}>
        <div
          className="alert alert-primary d-flex align-items-center"
          role="alert"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            className="bi bi-exclamation-triangle-fill flex-shrink-0 me-2"
            viewBox="0 0 16 16"
            role="img"
            aria-label="Warning:"
          >
            <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
          </svg>
          <div>
            Your text has {countWords()} words and {countCharacters()} characters
          </div>
        </div>
      </div>

      <div className="container my-5" style={cardStyle}>
        <div className={`card text-bg-${props.themeMode==="primary"?"light":"dark"} border-${props.themeMode==="primary"?"dark":"light"} mb-3`}>
          <div className="card-header">
            <h5>Preview text</h5>(Expected time to read:{" "}
            {countWords() * 0.008} minutes)
          </div>
          <div className="card-body">
            <p className="card-text">
              {countWords() > 0 ? text : "Please write something"}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

TextForm.propTypes = {
  heading: PropTypes.string.isRequired,
};

TextForm.defaultProps = {
  heading: "Set heading here",
};
