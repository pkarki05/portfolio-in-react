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

function App() {
  return (
    <div>
      <input id="darkMode" type="checkbox" className="dark-mode-check" />

      <div className="wrapper">
        {/* <!-- dark mode toggler --> */}
        <label htmlFor="darkMode">
          <i className="fa-solid fa-circle-half-stroke dark-mode-toggle"></i>
        </label>

        {/* <!-- Header --> */}
        <Header />
        {/* <!-- Hero --> */}
        <Hero />
        {/* <!-- Banner --> */}
        {/* <!-- Skills --> */}
        <Skills />
        {/* <!-- Projects --> */}
        <Projects />
        {/* <!-- About Me --> */}
        <About />
        {/* <!-- Contact --> */}
        <Contact />
        {/* <!-- Footer --> */}
        <Footer />
      </div>
    </div>
  );
}

export default App;
