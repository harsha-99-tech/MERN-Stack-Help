import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Home/Hero";
import Test from "./components/Test/Test";
import Contact from "./components/Contact";
import About from "./components/About";
import UserForm from "./API/UserForm";

import Users from "./Users"; // Import the Users component

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/test" element={<Test />} />
        <Route path="/about" element={<About />} />
        <Route path="/users" element={<Users />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/userform" element={<UserForm />} />
      </Routes>
    </>
  );
}

export default App;
