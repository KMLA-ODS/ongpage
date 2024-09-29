// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Activities from "./components/Activities";
import Story from "./components/Story";
import Technology from "./components/Technology";
import Member from "./components/Member";

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/story" element={<Story />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/member" element={<Member />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
