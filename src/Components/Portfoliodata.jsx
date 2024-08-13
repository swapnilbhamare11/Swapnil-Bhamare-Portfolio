import React from "react";
import crtimg from "../myimages/idea.png";
import gm1 from "../myimages/gmart1.jpg";
import gm2 from "../myimages/gmart2.jpg";
import gm3 from "../myimages/gmart3.jpg";
import dg1 from "../myimages/dg1.jpg";
import dg2 from "../myimages/dg2.jpg";
import dg3 from "../myimages/dg3.jpg";
import eibs1 from "../myimages/eibs1.jpg";
import eibs2 from "../myimages/eibs2.jpg";
import eibs3 from "../myimages/eibs3.jpg";

function Portfoliodata() {
  return (
    <>
      <section className="w3-gallery py-5">
        <div className="container py-lg-5">
          <ul className="portfolio-categ filter text-center mb-4 p-0">
            <li>
              <br />
              <img src={crtimg} height="70px" width="80px" /> <br />
              <br />
              <h3>💻Github Profile Link : </h3>
              <h3>
                <a href="https://github.com/swapnilbhamare11">
                  Swapnil Bhamare
                </a>
              </h3>
              <br />
              <h2>My Web Development (Internship) Project Snapshots.</h2>
              <br />
            </li>
          </ul>
          <ul className="portfolio-area clearfix p-0 m-0">
            <li
              className="portfolio-item2 content"
              data-id="id-1"
              data-type="cat-item-1"
            >
              <span className="image-block">
                <div className="content-overlay"></div>
                <img
                  src={gm1}
                  className="img-fluid w3layouts agileits"
                  alt="portfolio-img"
                />
                <div className="content-details fadeIn-bottom">
                  <h3 className="content-title">GreenShade Grocerry Mart</h3>
                  <p className="content-text">Dynamic Website</p>
                </div>
              </span>
            </li>
            <li
              className="portfolio-item2 content"
              data-id="id-2"
              data-type="cat-item-2"
            >
              <span className="image-block">
                <div className="content-overlay"></div>
                <img
                  src={gm2}
                  className="img-fluid w3layouts agileits"
                  alt="portfolio-img"
                />
                <div className="content-details fadeIn-bottom">
                  <h3 className="content-title">GreenShade Grocerry Mart</h3>
                  <p className="content-text">Dynamic Website</p>
                </div>
              </span>
            </li>
            <li
              className="portfolio-item2 content"
              data-id="id-3"
              data-type="cat-item-1"
            >
              <span className="image-block">
                <div className="content-overlay"></div>
                <img
                  src={gm3}
                  className="img-fluid w3layouts agileits"
                  alt="portfolio-img"
                />
                <div className="content-details fadeIn-bottom">
                  <h3 className="content-title">GreenShade Grocerry Mart</h3>
                  <p className="content-text">Dynamic Website</p>
                </div>
              </span>
            </li>
            <li
              className="portfolio-item2 content"
              data-id="id-4"
              data-type="cat-item-3"
            >
              <span className="image-block">
                <div className="content-overlay"></div>
                <img
                  src={dg1}
                  className="img-fluid w3layouts agileits"
                  alt="portfolio-img"
                />
                <div className="content-details fadeIn-bottom">
                  <h3 className="content-title">Digital Gyaan Tech</h3>
                  <p className="content-text">Static Website</p>
                </div>
              </span>
            </li>
            <li
              className="portfolio-item2 content"
              data-id="id-5"
              data-type="cat-item-4"
            >
              <span className="image-block">
                <div className="content-overlay"></div>
                <img
                  src={dg2}
                  className="img-fluid w3layouts agileits"
                  alt="portfolio-img"
                />
                <div className="content-details fadeIn-bottom">
                  <h3 className="content-title">Digital Gyaan Tech</h3>
                  <p className="content-text">Static Website</p>
                </div>
              </span>
            </li>
            <li
              className="portfolio-item2 content"
              data-id="id-7"
              data-type="cat-item-3"
            >
              <span className="image-block">
                <div className="content-overlay"></div>
                <img
                  src={dg3}
                  className="img-fluid w3layouts agileits"
                  alt="portfolio-img"
                />
                <div className="content-details fadeIn-bottom">
                  <h3 className="content-title">Digital Gyaan Tech</h3>
                  <p className="content-text">Static Website</p>
                </div>
              </span>
            </li>
            <li
              className="portfolio-item2 content"
              data-id="id-4"
              data-type="cat-item-3"
            >
              <span className="image-block">
                <div className="content-overlay"></div>
                <img
                  src={eibs1}
                  className="img-fluid w3layouts agileits"
                  alt="portfolio-img"
                />
                <div className="content-details fadeIn-bottom">
                  <h3 className="content-title">EIBS</h3>
                  <p className="content-text">Static Website</p>
                </div>
              </span>
            </li>
            <li
              className="portfolio-item2 content"
              data-id="id-5"
              data-type="cat-item-4"
            >
              <span className="image-block">
                <div className="content-overlay"></div>
                <img
                  src={eibs2}
                  className="img-fluid w3layouts agileits"
                  alt="portfolio-img"
                />
                <div className="content-details fadeIn-bottom">
                  <h3 className="content-title">EIBS</h3>
                  <p className="content-text">Static Website</p>
                </div>
              </span>
            </li>
            <li
              className="portfolio-item2 content"
              data-id="id-7"
              data-type="cat-item-3"
            >
              <span className="image-block">
                <div className="content-overlay"></div>
                <img
                  src={eibs3}
                  className="img-fluid w3layouts agileits"
                  alt="portfolio-img"
                />
                <div className="content-details fadeIn-bottom">
                  <h3 className="content-title">EIBS</h3>
                  <p className="content-text">Static Website</p>
                </div>
              </span>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default Portfoliodata;
