import React from "react";
import "./style.scss";
import projectImg from "./assets/img/project.png";
import userImg from "./assets/img/user1.png";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import About from "./components/About";
import Hero from "./components/Hero";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <input id="darkMode" type="checkbox" className="dark-mode-check" />

      <div className="wrapper">
        <Routes>
          <Route path="/" element={<Hero />} /> {/* 👈 Renders at /app/ */}
          <Route path="/skills" element={<Skills />} />{" "}
          {/* 👈 Renders at /app/ */}
          <Route path="/hero" element={<Hero />} /> {/* 👈 Renders at /app/ */}
          <Route path="/about" element={<About />} />{" "}
          {/* 👈 Renders at /app/ */}
          <Route path="/contact" element={<Contact />} />{" "}
          {/* 👈 Renders at /app/ */}
          <Route path="/projects" element={<Projects />} />{" "}
          {/* 👈 Renders at /app/ */}
        </Routes>
        {/* <!-- dark mode toggler --> */}
        <label htmlFor="darkMode">
          <i className="fa-solid fa-circle-half-stroke dark-mode-toggle"></i>
        </label>
      </div>
    </div>
  );
}

export default App;
