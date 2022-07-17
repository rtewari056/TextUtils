import "./App.css";
import React, { useState } from "react";

import Navbar from "./components/Navbar";
import Alert from "./components/Alert";
import TextForm from "./components/TextForm";
// import About from "./components/About";

function App() {
  const [mode, setMode] = useState("primary"); // State variable for theme mode
  const [alertMessage, setAlertMessage] = useState(null); // State variable for alert message

  const showAlert = (message, type) => {
    setAlertMessage({
      message: message,
      type: type,
    });

    // To dismiss the alert after 2 seconds
    setTimeout(() => {
      setAlertMessage(null);
    }, 2000);
  };

  // Function to enable/disable Dark Mode
  const toggleMode = () => {
    if (mode === "dark") {
      setMode("primary");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    } else {
      setMode("dark");
      document.body.style.backgroundColor = "#032a63";
      showAlert("Dark mode has been enabled", "success");
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
      <Alert alert={alertMessage} />
      <TextForm
        heading="Enter the text to analyze"
        themeMode={mode}
        showAlert={showAlert}
      />
      {/* <About/> */}
    </>
  );
}

export default App;
