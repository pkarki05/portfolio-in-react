import React from "react";
import Layout from "./Layout";

function Contact() {
  return (
    <Layout>
      <section className="section6 flex" id="contact">
        <h2 className="title">Get in Touch</h2>
        <div className="socials flex">
          <i className="fa-brands fa-linkedin"></i>
          <i className="fa-brands fa-linkedin"></i>
          <i className="fa-brands fa-linkedin"></i>
          <i className="fa-brands fa-linkedin"></i>
        </div>

        <h3 className="title">OR</h3>

        <div className="email-section flex">
          <div className="email flex">
            <p>youremail@gmail.com</p>
            <a href="mailto:youremail@gmail.com">
              <div className="send">
                <i className="fa-solid fa-envelope"></i>
              </div>
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Contact;
