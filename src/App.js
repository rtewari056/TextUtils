import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// import About from "./components/About";

import React, { useState } from "react";

function App() {
  const [mode, setMode] = useState("primary");

  const toggleMode = () => {
    if (mode === "dark") {
      setMode("primary");
      document.body.style.backgroundColor = "white";
    } else {
      setMode("dark");
      document.body.style.backgroundColor = "#032a63";
    }
  };

  return (
    <>
      <Navbar
        title="TextUtils"
        aboutText="About us"
        themeMode={mode}
        toggleMode={toggleMode}
      />
      <TextForm
        heading="Enter the text to analyze"
        themeMode={mode}
      />
      {/* <About/> */}
    </>
  );
}

export default App;
