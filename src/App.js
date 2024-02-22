import "./App.css";
import Navbar from "./components/Navbar";
import React, { useState } from "react";
import TextForm from "./components/TextForm";
// import About from "./components/About";

function App() {
  const [mode, setMode] = useState("light");
  const themeMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };
  return (
    <>
      <Navbar
        title="LearningApp"
        aboutUs="About Us"
        mode={mode}
        themeMode={themeMode}
      />
      <div className="container my-3">
        <TextForm
          heading="Enter the text to analyze"
          mode={mode}
        />
      </div>
      {/* <About /> */}
    </>
  );
}

export default App;
