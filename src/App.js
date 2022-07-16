import "./App.css";
import Navbar from "./components/Navbar";
// import TextForm from "./components/TextForm";
import About from "./components/About";

function App() {
  return (
    <>
      <Navbar title="TextUtils" aboutText="About us"/>
      {/* <TextForm heading="Enter the text to analyze"/> */}
      <About/>
    </>
  );
}

export default App;
