import React from "react";
import { Link, useLocation } from "react-router-dom";
var registrationid;
export default function AdminDashboard() {
  //Passing Data between components
  const { state } = useLocation();
  if (state !== null) {
    var { login } = state;
    var rid = login.rid;
  }

  registrationid = rid;
  //console.log(login.rid);
  console.log(registrationid);
  return (
    <div>
      <div align="right">
        <Link className="btn btn-info mx-2" to="/registeradmin">
          Register Sub Admin
        </Link>
        <Link className="btn btn-info mx-2" to="/registerserviceprovider">
          Register Service Provider
        </Link>

        <Link className="btn btn-info mx-2" to="/">
          Logout
        </Link>
      </div>
    </div>
  );
}
