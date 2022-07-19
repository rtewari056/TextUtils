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
    /*
    Algorithm to count words:
      1. \s+: matches one or more any whitespace symbol: spaces, tabs, and line breaks
      2. g: the g at the end indicates iterative searching throughout the full string
      3. Trim any surrounding spaces from the string using JavaScript’s string.trim() method
      4. Split by single space between words.
      5. Then calculate the length of the string
    */

    const regex = /\S/g; // Global search for non-whitespace characters
    const bool = regex.test(text); // Search a string for non-whitespace characters (Returns true if present else returns false)

    if (bool) return text.replace(/\s+/g, " ").trim().split(" ").length; // Return if true

    return 0; // Return 0 if false
  };

  const countCharacters = () => {
    /*
    Algorithm to count characters:
      1. \s+: matches one or more any whitespace symbol: spaces, tabs, and line breaks
      2. g: the g at the end indicates iterative searching throughout the full string
      3. Trim any surrounding spaces from the string using JavaScript’s string.trim() method
      4. Split by single space between words.
      5. Then join the strings.
      6. Then calculate the length of the string
    */
    // let convertedText = text.replace(/\s+/g, ' ').trim();
    return text.replace(/\s+/g, " ").trim().split(" ").join("").length;
  };

  const removeSpaces = () => {
    /*
    Algorithm to remove spaces, tabs, and line breaks:
    1. \s+: matches one or more any whitespace symbol: spaces, tabs, and line breaks
    2. g: the g at the end indicates iterative searching throughout the full string
    3. Trim any surrounding spaces from the string using JavaScript’s string.trim() method
    */
    let convertedText = text.replace(/\s+/g, " ").trim();
    setText(convertedText);
    props.showAlert("Removed extra white spaces", "success");
  };

  return (
    <>
      <div className="container my-5" style={cardStyle}>
        <div
          className={`card text-bg-${
            props.themeMode === "primary" ? "light" : "dark"
          } border-${props.themeMode === "primary" ? "dark" : "light"} mb-3`}
        >
          <h4 className="card-header">{props.heading}</h4>
          <div className={`card-body text-light`}>
            <textarea
              className={`form-control text-${
                props.themeMode === "primary" ? "dark" : "light"
              }`}
              id="myTextBox"
              rows="8"
              value={text}
              onChange={handleOnChange}
              placeholder={"Start typing, or copy and paste your text here..."}
              style={{
                // If light mode is on then set textbox background color to white else black
                backgroundColor:
                  props.themeMode === "primary" ? "white" : "#343a40",
              }}
            ></textarea>
            <div className="boxButton">
              <button
                type="button"
                className="btn btn-danger me-2 mt-3"
                onClick={clearText}
                disabled={countWords() === 0 ? true : false}
              >
                Clear text
              </button>
              <button
                type="button"
                className="btn btn-primary me-2 mt-3"
                onClick={copyText}
                disabled={countWords() === 0 ? true : false}
              >
                Copy text
              </button>
              <button
                type="button"
                className="btn btn-primary me-2 mt-3"
                onClick={convertToUppercase}
                disabled={countWords() === 0 ? true : false}
              >
                Convert to uppercase
              </button>
              <button
                type="button"
                className="btn btn-primary me-2 mt-3"
                onClick={convertToLowercase}
                disabled={countWords() === 0 ? true : false}
              >
                Convert to lowercase
              </button>
              <button
                type="button"
                className="btn btn-primary me-2 mt-3"
                onClick={removeSpaces}
                disabled={countWords() === 0 ? true : false}
              >
                Remove extra spaces
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container" style={cardStyle}>
        <div
          className={`alert alert-primary d-flex align-items-center border-${
            props.themeMode === "primary" ? "dark" : "light"
          }`}
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
            Your text has {countWords()} words and {countCharacters()}{" "}
            characters
          </div>
        </div>
      </div>

      <div className="container my-5" style={cardStyle}>
        <div
          className={`card text-bg-${
            props.themeMode === "primary" ? "light" : "dark"
          } border-${props.themeMode === "primary" ? "dark" : "light"} mb-3`}
        >
          <div className="card-header">
            <h5>Preview text</h5>(Expected time to read: {countWords() * 0.008}{" "}
            minutes)
          </div>
          <div className="card-body">
            <p className="card-text">
              {countWords() > 0 ? text : "Enter text to preview"}
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
