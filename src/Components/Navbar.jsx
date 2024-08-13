import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Code from "../myimages/coding.png";

function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme === "dark" || false;
  });

  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      isDarkMode ? "dark" : "light"
    );
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  const handleThemeToggle = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  const handleNavCollapse = () => {
    setIsNavCollapsed(!isNavCollapsed);
  };

  return (
    <header id="site-header" className="fixed-top">
      <div className="container">
        <nav className="navbar navbar-expand-lg stroke">
          <NavLink className="navbar-brand" to="/">
            <img
              src={Code}
              alt="Web Developer"
              style={{ height: "70px", width: "80px" }}
            />
            &nbsp; Web Developer
          </NavLink>

          <button
            className={`navbar-toggler ${
              isNavCollapsed ? "collapsed" : ""
            } bg-gradient`}
            type="button"
            onClick={handleNavCollapse}
            aria-controls="navbarTogglerDemo02"
            aria-expanded={!isNavCollapsed}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon fa icon-expand fa-bars"></span>
            <span className="navbar-toggler-icon fa icon-close fa-times"></span>
          </button>

          <div
            className={`collapse navbar-collapse ${
              !isNavCollapsed ? "show" : ""
            }`}
            id="navbarTogglerDemo02"
          >
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/" end>
                  Home<span className="sr-only">(current)</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/portfolio">
                  Portfolio
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/services">
                  Services
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Contact
                </NavLink>
              </li>
              {/* Centered Theme Switch Button inside the menu list */}
              <li className="nav-item d-flex justify-content-center">
                <div className="theme-switch-wrapper">
                  <label className="theme-switch" htmlFor="checkbox">
                    <input
                      type="checkbox"
                      id="checkbox"
                      checked={isDarkMode}
                      onChange={handleThemeToggle}
                    />
                    <div className="mode-container">
                      <i className="gg-sun"></i>
                      <i className="gg-moon"></i>
                    </div>
                  </label>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
