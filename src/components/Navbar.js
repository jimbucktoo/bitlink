import React from "react";
import logo from "../assets/svgs/bitly.svg";
import "../styles/App.css";

function Navbar() {
  return (
    <div className="Navbar">
      <nav className="uiNavbar navbar navbar-expand-lg">
        <a className="uiNavLogo navbar-brand" href="/">
          <img className="nav-logo" src={logo} alt="Logo"></img>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="uiNavLinks nav-link" href="/">
                Tour <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="uiNavLinks nav-link" href="/">
                Enterprise
              </a>
            </li>
            <li className="nav-item">
              <a className="uiNavLinks nav-link" href="/">
                Resources
              </a>
            </li>
            <li className="nav-item">
              <a className="uiNavLinks nav-link" href="/">
                About
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
