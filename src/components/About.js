import React from "react";
import userImg from "../assets/img/user1.png";

function About() {
  return (
    <section className="section5 flex" id="about-me">
      <h2 className="title">About Me</h2>
      <div className="about-container flex">
        <div className="left">
          <img src={userImg} alt="" />
        </div>
        <div className="right flex">
          <h2>Kiran Gautam</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente
            velit amet, neque quae culpa quos voluptatum harum?
          </p>
          <div className="flex">
            <div className="tag">Interests</div>
            <div className="flex">
              <span>Coding</span>
              <span>Football</span>
              <span>Movies</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
