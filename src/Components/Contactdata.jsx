import React from "react";

function Contactdata() {
  return (
    <>
      <br />
      <br />

      <div
        className="display-ad"
        style={{ margin: "8px auto", display: "block", textAlign: "center" }}
      ></div>

      <section className="w3l-contact-1 py-5">
        <div className="contacts-9 py-lg-5 py-md-4">
          <div className="container">
            <div className="d-grid contact-view">
              <div className="cont-details">
                <div className="cont-top">
                  <div className="cont-left text-center">
                    <span className="fa fa-phone text-primary"></span>
                  </div>
                  <div className="cont-right">
                    <h6>Call Me</h6>
                    <p>
                      <a href="tel:+919834027356">+919834027356</a>
                    </p>
                  </div>
                </div>
                <div className="cont-top margin-up">
                  <div className="cont-left text-center">
                    <span className="fa fa-envelope-o text-primary"></span>
                  </div>
                  <div className="cont-right">
                    <h6>Email Me</h6>
                    <p>
                      <a href="mailto:sbhamare216@gmail.com" className="mail">
                        sbhamare216@gmail.com
                      </a>
                    </p>
                  </div>
                </div>
                <div className="cont-top margin-up">
                  <div className="cont-left text-center">
                    <span className="fa fa-map-marker text-primary"></span>
                  </div>
                  <div className="cont-right">
                    <h6>Location</h6>
                    <p>
                      Plot No.9, Survey No.209, Jankai Apartment, Ashok Nagar,
                      Satpur, Nashik.
                    </p>
                  </div>
                </div>
              </div>
              <div className="map-content-9">
                <form
                  action="https://sendmail.w3layouts.com/submitForm"
                  method="post"
                >
                  <div className="twice-two">
                    <input
                      type="text"
                      className="form-control"
                      name="w3lName"
                      id="w3lName"
                      placeholder="Name"
                      required
                    />
                    <input
                      type="email"
                      className="form-control"
                      name="w3lSender"
                      id="w3lSender"
                      placeholder="Email"
                      required
                    />
                  </div>
                  <div className="twice">
                    <input
                      type="text"
                      className="form-control"
                      name="w3lSubject"
                      id="w3lSubject"
                      placeholder="Subject"
                      required
                    />
                  </div>
                  <textarea
                    name="w3lMessage"
                    className="form-control"
                    id="w3lMessage"
                    placeholder="Message"
                    required
                  ></textarea>
                  <div className="text-right">
                    <button
                      type="submit"
                      className="btn btn-primary btn-style mt-4"
                      disabled
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d937.3420260109839!2d73.70574142936096!3d19.9930596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdded971d2de83f%3A0xad10d889834cd1a1!2sGURUDATTA%20CLASSES!5e0!3m2!1sen!2sin!4v1679041849514!5m2!1sen!2sin"
          width="100%"
          height="400"
          style={{ border: "0" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div
        className="display-ad"
        style={{ margin: "8px auto", display: "block", textAlign: "center" }}
      ></div>
    </>
  );
}

export default Contactdata;
