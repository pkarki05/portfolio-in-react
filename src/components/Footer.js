import React from "react";

function Footer() {
  return (
    <footer>
      <div className="footer-container flex">
        <div className="flex links">
          <h3>Links</h3>
          <ul className="flex">
            <li>
              <a href="#header">Home</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#about">About Me</a>
            </li>
          </ul>
        </div>
        <div className="flex links">
          <h3>Socials</h3>
          <ul className="flex">
            <li>
              <a href="">Linkedin</a>
            </li>
            <li>
              <a href="">Youtube</a>
            </li>
            <li>
              <a href="">Facebook</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">&copy; All Right Reserved.</div>
    </footer>
  );
}

export default Footer;
