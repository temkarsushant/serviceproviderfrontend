import React from "react";
import { Link } from "react-router-dom";
import YashLogo from "../images/YashLogo.png";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div>
          <img
            src={YashLogo}
            alt="Yash Inc. logo"
            style={{ width: "130px", height: "80px" }}
            align="left"
          />
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Digital HD Cabel
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Internet/IP
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Feedback
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
