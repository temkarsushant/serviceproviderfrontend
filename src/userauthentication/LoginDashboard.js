import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../layout/Navbar";
import ImageTest from "../images/top-dth-providers.jpg";

export default function LoginDashboard() {
  return (
    <div>
      <div style={{ color: "red" }}>Yash Service Provider</div>

      <div
        style={{
          paddingRight: "20px",
          border: "1px solid black",
          padding: "20px",
          borderRadius: "15px",
        }}
      >
        <div>
          <img
            src={ImageTest}
            alt="BigCo Inc. logo"
            style={{ width: "300px", height: "80px" }}
            align="left"
          />
        </div>
        <div>
          <img
            src={ImageTest}
            alt="BigCo Inc. logo"
            style={{ width: "300px", height: "80px" }}
            align="left"
          />
        </div>
        <div>
          <img
            src={ImageTest}
            alt="BigCo Inc. logo"
            style={{ width: "300px", height: "80px" }}
            align="left"
          />
        </div>

        <div align="right" style={{ paddingRight: "20px" }}>
          <Link className="btn-btn-outline-light" to="/registeruser">
            Click Here To Register New User
          </Link>
        </div>

        <div align="right" style={{ paddingRight: "20px" }}>
          <Link className="btn-btn-outline-light" to="/userlogin">
            Click here For User Login
          </Link>
        </div>
        <div align="right" style={{ paddingRight: "20px" }}>
          <Link className="btn-btn-outline-light" to="/adminlogin">
            Click Here For Admin Login
          </Link>
        </div>
      </div>
    </div>
  );
}
