import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="flex primary-header">
      <div className="logo flex">
        <div>
          <h1>Kiran</h1>
        </div>
        <div>
          <h1 className="line">Soft. Engineer</h1>
        </div>
      </div>

      {/* <!-- top menu  --> */}

      <div className="right">
        <input type="checkbox" id="check" />
        <label htmlFor="check" className="menu-icon">
          <i className="fa-solid fa-bars"></i>
        </label>

        <ul className="flex navigation">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/skills">Skill</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
