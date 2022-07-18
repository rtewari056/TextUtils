// import React, { useState } from "react";

export default function About(props) {
  const aboutCardStyle = {
    // width: "100%",
  };

  return (
    <>
      <div className="container mt-5" style={aboutCardStyle}>
        <div className={`card text-bg-${props.themeMode==="primary"? "light":"dark"} border-${props.themeMode==="primary"?"dark":"light"} mb-3`}>
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={require("../Profile Pic.jpg")}
                className="img-fluid rounded-start"
                alt="Rohit Tewari"
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h3 className="card-title">{props.aboutCardTitle}</h3>
                <p className="card-text lead mt-3">{props.aboutCardText}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
