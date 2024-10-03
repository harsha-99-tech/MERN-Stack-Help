import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Test from "./components/Test";
import About from "./components/About";
import Users from "./Users"; // Import the Users component

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/test" element={<Test />} />
        <Route path="/about" element={<About />} />
        <Route path="/users" element={<Users />} /> {/* Add Users route */}
      </Routes>
    </>
  );
}

export default App;
