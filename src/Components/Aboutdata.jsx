import React from "react";
import portfolio_img from "../myimages/portfolio_img.jpg";
import dev from "../myimages/dev.png";
import resume from "../Components/SwapnilBhamare98.pdf";

function Aboutdata() {
  return (
    <>
      <br />
      <section className="w3l-index3" id="about">
        <div className="midd-w3 py-5">
          <div className="container py-lg-5 py-md-3">
            <div className="row">
              <div className="col-lg-4">
                <div className="position-relative">
                  <img
                    src={portfolio_img}
                    alt="Portfolio"
                    className="radius-image img-fluid"
                  />
                </div>
              </div>
              <div className="col-lg-8 mt-lg-0 mt-5">
                <h5 className="title-small mb-2">Who am I?</h5>
                <h3 className="title-big">
                  I'm Swapnil Bhamare,
                  <br /> A{" "}
                  <img
                    src={dev}
                    alt="Developer icon"
                    style={{ height: "60px", width: "60px" }}
                  />{" "}
                  Full Stack Web Developer <br /> & Creative React Developer.
                </h3>
                <p className="mt-4">
                  I am a certified Full Stack Web Developer with a solid
                  background in Full Stack Web Development, including
                  specialized training and hands-on experience through an
                  internship at NPIT Solutions. I am dedicated to designing and
                  static, building dynamic, visually striking websites that
                  offer exceptional user experiences and operate at peak
                  performance. My technical toolkit includes HTML5, CSS3,
                  JavaScript ES6, Css framework Bootstrap,Tailwind Css,Frontend
                  Js library ReactJs, Vite.js,NPM for Frontend & PHP, and Mysql
                  for Backend Development. I am eager to bring my skills to a
                  forward-thinking organization that values creativity and
                  innovation.
                </p>{" "}
                <a
                  href={resume}
                  download="SwapnilBhamare98.pdf" // Optional: Set the file name here
                  className="btn btn-style btn-primary mt-lg-5 mt-4"
                >
                  Download Resume
                </a>
              </div>
            </div>
            <div class="my-info mt-4">
              <div class="single-info">
                <span>Name:</span>
                <p>Swapnil S.Bhamare</p>
              </div>
              <div class="single-info">
                <span>Age:</span>
                <p>23 Years</p>
              </div>
              <div class="single-info">
                <span>From:</span>
                <p>Nashik,Maharashtra,India.</p>
              </div>
              <div class="single-info">
                <span>Email:</span>
                <p>
                  <a href="mailto:sbhamare216@gmail.com">
                    sbhamare216@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Aboutdata;
