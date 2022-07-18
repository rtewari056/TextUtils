import React from "react";
import PropTypes from "prop-types";

export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-dark bg-${props.themeMode}`}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          {props.title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse text-light"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link" href="/about">
                {props.aboutText}
              </a>
            </li> */}
          </ul>

          <div className="form-check form-switch form-check-reverse text-light">
            <input
              className="form-check-input"
              type="checkbox"
              id="flexSwitchCheckReverse"
              onClick={props.toggleMode}
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckReverse"
            >
              {props.themeMode === "primary"
                ? "Enable Dark Mode"
                : "Disable Dark Mode"}
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}

// Just to make sure that the "title" and "aboutText" we are passing should be string type
Navbar.propTypes = {
  title: PropTypes.string.isRequired, // We have to pass the "title" prop(when default props not defined) if .isRequired is used
  aboutText: PropTypes.string,
};

// If prps not passed to the function then default props will be used
Navbar.defaultProps = {
  title: "Set title here",
  aboutText: "Set about text here",
};
