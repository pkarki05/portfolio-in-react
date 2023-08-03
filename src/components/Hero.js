import React from "react";
import userImg from "../assets/img/user1.png";
import Layout from "./Layout";

function Hero() {
  return (
    <>
      <Layout>
        <section className="section1" id="header">
          <div className="hero grid">
            <div className="left flex">
              <div className="flex">
                <div className="name">Hi, I am Kiran Gautam</div>
                <div className="tag">Software Engineer</div>
                <div className="sub-tag">I love coding and teach other ...</div>
                <button>
                  <a href="./assets/img/user1." download>
                    Download CV
                    <i className="fa-solid fa-download"></i>
                  </a>
                </button>
              </div>
            </div>
            <div className="right">
              <img src={userImg} alt="" />
            </div>
          </div>
        </section>

        <section className="section2">
          <div className="info-container flex">
            <div className="info-lists flex">
              <div className="info-content flex">
                <div className="icon-container flex">
                  <i className="fa-solid fa-award"></i>
                </div>
                <span>
                  <h5>IT</h5>
                  <p>Graduate</p>
                </span>
              </div>
              <div className="info-divider"></div>
              <div className="info-content flex">
                <div className="icon-container flex">
                  <i className="fa-solid fa-award"></i>
                </div>
                <span>
                  <h5>5 +</h5>
                  <p>Projects</p>
                </span>
              </div>
              <div className="info-divider"></div>
              <div className="info-content flex">
                <div className="icon-container flex">
                  <i className="fa-solid fa-award"></i>
                </div>
                <span>
                  <h5>1 + year</h5>
                  <p>Coding Experience</p>
                </span>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}

export default Hero;
