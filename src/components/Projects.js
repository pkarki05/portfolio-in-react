import React from "react";
import projectImg from "../assets/img/project.png";

function Projects() {
  return (
    <section className="section4 flex" id="projects">
      <h2 className="title">My Recent Work</h2>
      <div className="projects-container grid">
        <div className="project-card">
          <div className="top">
            <img src={projectImg} alt="" />
          </div>
          <div className="buttom">
            <div className="flex">
              <i className="fa-brands fa-html5"></i>
              <i className="fa-brands fa-html5"></i>
            </div>
            <p>Portfolio with React</p>
            <p>22 April 2023</p>
          </div>
        </div>

        <div className="project-card">
          <div className="top">
            <img src={projectImg} alt="" />
          </div>
          <div className="buttom">
            <div className="flex">
              <i className="fa-brands fa-html5"></i>
              <i className="fa-brands fa-html5"></i>
            </div>
            <p>Portfolio with React</p>
            <p>22 April 2023</p>
          </div>
        </div>

        <div className="project-card">
          <div className="top">
            <img src={projectImg} alt="" />
          </div>
          <div className="buttom">
            <div className="flex">
              <i className="fa-brands fa-html5"></i>
              <i className="fa-brands fa-html5"></i>
            </div>
            <p>Portfolio with React</p>
            <p>22 April 2023</p>
          </div>
        </div>

        <div className="project-card">
          <div className="top">
            <img src={projectImg} alt="" />
          </div>
          <div className="buttom">
            <div className="flex">
              <i className="fa-brands fa-html5"></i>
              <i className="fa-brands fa-html5"></i>
            </div>
            <p>Portfolio with React</p>
            <p>22 April 2023</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
