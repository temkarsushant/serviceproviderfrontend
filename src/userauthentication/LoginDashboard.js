import React from "react";
import { Link } from "react-router-dom";

export default function LoginDashboard() {
  return (
    <div>
      <div>LoginDashboard</div>
      <div>
        <Link className="btn-btn-outline-light" to="/registeruser">
          Register User
        </Link>
        <div>
          <Link className="btn-btn-outline-light" to="/userlogin">
            User Login
          </Link>
        </div>
        <div>
          <Link className="btn-btn-outline-light" to="/adminlogin">
            Admin Login
          </Link>
        </div>
      </div>
    </div>
  );
}
