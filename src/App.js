import React from "react";
import "./App.css";
import Headshot from "./Components/Headshot";
import Title from "./Components/Title";
import About from "./Components/About";
import Interests from "./Components/Interests";
import Footer from "./Components/Footer";
import Buttons from "./Components/Buttons";

function App() {
  return (
    <div className="App">
      <Headshot />
      <Title />
      <Buttons />
      <About />
      <Interests />
      <Footer />
    </div>
  );
}

export default App;
