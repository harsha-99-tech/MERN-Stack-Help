import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import PhotoCollage from "./components/Body/PhotoCollage";

// import Body from "./components/Body/Body";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <PhotoCollage />
    </div>
  );
}

export default App;
