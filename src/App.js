import "./App.css";
import React, { useState } from "react";

import Navbar from "./components/Navbar";
import Alert from "./components/Alert";
import TextForm from "./components/TextForm";
import About from "./components/About";

// Importing React Router Dom
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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

  const [bodyBgColor, setbodyBgColor] = useState("#E5EDF6"); // Defining background color of body using state variable so that we can change it later using functions
  document.body.style.backgroundColor = bodyBgColor;

  // Function to enable/disable Dark Mode
  const toggleMode = () => {
    if (mode === "dark") {
      setMode("primary");
      setbodyBgColor("#E5EDF6")
      showAlert("Light mode has been enabled", "success");
    } else {
      setMode("dark");
      setbodyBgColor("#032a63")
      showAlert("Dark mode has been enabled", "success");
    }
  };

  const aboutCardTitle = "Hi! I am Rohit";
  const aboutCardText = `I am a JavaScript Developer who is mostly inclined towards MERN stack. Worked on server-side code using Node JS & Express JS. Along with JavaScript, contributed to open-source projects and worked on JS frameworks like React JS.`;

  return (
    <>
      <Router>
        <Navbar
          title="TextUtils"
          aboutText="About me"
          themeMode={mode}
          toggleMode={toggleMode}
        />

        <Alert alert={alertMessage} />

        <Routes>
          {/* exact path=""  matches exact path */}
          <Route exact path="/about" element={<About themeMode={mode} aboutCardTitle={aboutCardTitle} aboutCardText={aboutCardText} />} />
          <Route
            exact
            path="/"
            element={
              <TextForm
                heading="Enter the text to analyze"
                themeMode={mode}
                showAlert={showAlert}
              />
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
