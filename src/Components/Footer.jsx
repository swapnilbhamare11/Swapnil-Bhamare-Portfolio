import React, { useEffect } from "react";

const Footer = () => {
  useEffect(() => {
    const scrollFunction = () => {
      const button = document.getElementById("movetop");
      if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
      ) {
        button.style.display = "block";
      } else {
        button.style.display = "none";
      }
    };

    const topFunction = () => {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    };

    window.onscroll = scrollFunction;

    // Cleanup function to remove the event listener
    return () => {
      window.onscroll = null;
    };
  }, []);

  return (
    <section className="w3l-footer py-sm-5 py-4">
      <div className="container">
        <div className="footer-content">
          <div className="row">
            <div className="col-lg-8 footer-left">
              <p className="m-0">
                All © Copyright 2024. Developed By{" "}
                <a
                  href="https://www.linkedin.com/in/swapnil-bhamare-008759239/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Swapnil S. Bhamare
                </a>
              </p>
            </div>
            <div className="col-lg-4 footer-right text-lg-right text-center mt-lg-0 mt-3">
              <ul className="social m-0 p-0">
                <li>
                  <a href="https://www.linkedin.com/in/swapnil-bhamare-008759239/">
                    <span className="fa fa-linkedin-square"></span>
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/swapnil_bhamare.009/">
                    <span className="fa fa-instagram"></span>
                  </a>
                </li>
                <li>
                  <a href="tel:+919834027356">
                    <span className="fa fa-whatsapp"></span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Move top button */}
      <button
        onClick={() => {
          document.body.scrollTop = 0;
          document.documentElement.scrollTop = 0;
        }}
        id="movetop"
        title="Go to top"
        style={{
          display: "none",
          position: "fixed",
          bottom: "20px",
          right: "20px",
        }}
      >
        <span className="fa fa-angle-up"></span>
      </button>
    </section>
  );
};

export default Footer;
