import React from "react";

import "./App.css";

import Navbar from "./components/navbar/Navbar";
import Main from "./components/main/Main";
import LightBox from "./components/lightbox/Lightbox";

function App() {
  return (
    <>
      <div id="page">
        <Navbar />
        <Main />
      </div>
      <div id="lightBox">
        <LightBox />
      </div>
    </>
  );
}

export default App;