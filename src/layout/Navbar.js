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
              <Link className="nav-link" to="/">
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/aboutus">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/digitalhdcable">
                Digital HD Cabel
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/internateip">
                Internet/IP
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/feedback">
                Feedback
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
