import React from "react";
import { NavLink } from "react-router-dom";
import web from "../myimages/web.png";
import myport from "../myimages/portfolio_img.jpg";
import dev from "../myimages/dev.png"; // Added import for 'dev'
import crtimg from "../myimages/idea.png";
import hotlineImg from "../myimages/hotline.gif";
import wpImg from "../myimages/wp.gif";
import desktop from "../myimages/c.jpeg";
import resume from "../Components/SwapnilBhamare98.pdf";

function Landingpage() {
  return (
    <>
      <section id="home" className="w3l-banner py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-sm-12 mt-lg-0 mt-4">
              <span className="title-small">Hello,</span>
              <h1 className="mb-2 title">
                <span>I'm</span> Swapnil Bhamare
              </h1>
              <h1 className="mb-4 title">
                a{" "}
                <img
                  src={web}
                  alt="Web icon"
                  style={{ height: "70px", width: "70px" }}
                />{" "}
                <span className="typed-text">Web Developer.</span>{" "}
                <img
                  src={dev}
                  alt="Developer icon"
                  style={{ height: "70px", width: "70px" }}
                />
              </h1>
              <p>
                Combining Creativity with Curiosity, I am a Web Developer
                dedicated to building static, dynamic, and responsive websites.
                My expertise in React.js and Vite for frontend & PHP for backend
                allows me to craft seamless digital experiences that delight
                users. I am always eager to learn and adopt new technologies,
                ensuring my projects are both innovative and efficient. My
                collaborative nature and attention to detail help me deliver
                high-quality web solutions that meet and exceed expectations.
              </p>
              <div className="mt-sm-5 mt-4">
                <NavLink to="/contact">
                  <button className="btn btn-style btn-outline-primary">
                    Hire Me
                  </button>
                </NavLink>{" "}
                <NavLink to="/portfolio">
                  <button className="btn btn-style btn-outline-primary">
                    Portfolio
                  </button>
                </NavLink>
              </div>
            </div>
            <div className="col-lg-6 col-md-8 col-sm-10 mt-lg-0 mt-4">
              <div className="img-effect text-lg-center">
                {/* Replace portfolio_img with the actual image or remove */}
                <img
                  src={myport} // Temporary placeholder
                  alt="Portfolio"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="py-5 w3l-resume">
        <div className="container py-lg-5 py-3">
          <h5 className="title-small mb-2">My Resume</h5>
          <h3 className="title-big mb-4">
            I Would Love &nbsp; <img src={crtimg} height="70px" width="80px" />{" "}
            &nbsp;To Make Your Ideas Real.
          </h3>
          <p>
            I Love Web Development. You Can Download My Resume In Order To Read
            The Details Of My Professional Life As A Developer <br /> And
            Contact Me And We Will Discuss Your Projects!
          </p>
          <div className="mt-5">
            <a
              href={resume}
              download="SwapnilBhamare98.pdf" // Optional: Set the file name here
              className="btn btn-style btn-primary mt-lg-5 mt-4"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>

      <section className="w3l-index5" id="about">
        <div className="new-block py-5">
          <div className="container py-lg-5">
            <div className="middle-section text-center">
              <div className="section-width">
                <h3 className="title-big">
                  I Can Give Your Business A New Creative Start Right Away! Hire
                  Me For Your Awesome Project
                </h3>
                <p className="mt-3">
                  Start Your Journey Online. Make Your Website Live In The
                  World.
                  <br />
                  Join The Digital World. Make Your Business Online
                </p>
              </div>
              <div className="mt-5">
                <div className="position-relative">
                  <center>
                    <img
                      src={desktop}
                      className="img-fluid video-popup-image"
                      alt="video-popup"
                      width="700px"
                      height="auto" // Changed height to 'auto' to maintain aspect ratio
                    />
                  </center>
                </div>
              </div>

              <div id="small-dialog" className="zoom-anim-dialog mfp-hide">
                <iframe
                  src="https://www.youtube.com/embed/Z_KspIX1oXU"
                  allowFullScreen
                  title="Video"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hotline and WhatsApp Icons */}
      <a
        href="tel:+919834027356"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: "fixed",
          left: "1395px",
          bottom: "240px",
          zIndex: 999999,
        }}
      >
        <img src={hotlineImg} alt="Hotline" width="120px" />
      </a>
      <a
        href="https://api.whatsapp.com/send?phone=+919834027356"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: "fixed",
          left: "1425px",
          bottom: "320px",
          zIndex: 999999,
        }}
      >
        <img src={wpImg} alt="WhatsApp" width="60px" />
      </a>

      <section className="w3l-grid-quote text-center py-5">
        <div className="container py-3">
          <h6 className="title-small">Get in touch</h6>
          <h3 className="title-big mb-md-5 mb-4">
            Let's Start A Project! Hire Me.
          </h3>
          <NavLink
            to="/contact"
            className="btn btn-style btn-primary mr-2 text-center"
          >
            Hire Me
          </NavLink>
        </div>
      </section>
    </>
  );
}

export default Landingpage;
