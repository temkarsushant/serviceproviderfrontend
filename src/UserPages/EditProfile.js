import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import ImageTest from "../serviceprovider/reg6.png";
import ImageTest2 from "../serviceprovider/reg2.png";
export default function EditProfile() {
  let navigate = useNavigate();
  const [registration, setUser] = useState({
    firstname: "",
    lastname: "",
    mobileno: "",
    emailid: "",

    usertype: "User",
  });

  const {
    firstname,
    lastname,
    mobileno,
    emailid,

    usertype,
  } = registration;

  const onInputChange = (e) => {
    setUser({ ...registration, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (registration.firstname === "" || registration.firstname == null) {
      alert("Please Enter First Name");
      return false;
    } else if (registration.lastname === "" || registration.lastname == null) {
      alert("Please Enter Last Name");
      return false;
    } else if (registration.mobileno === "" || registration.mobileno == null) {
      alert("Please Enter Mobile No.");
      return false;
    } else if (registration.mobileno.length !== 10) {
      alert("Mobile Number must have 10 numbers");
      return false;
    } else if (registration.emailid === "" || registration.emailid == null) {
      alert("Please Enter Email Id");
      return false;
    } else if (registration.emailid.search("@") == -1) {
      alert("Email Id Must contain @ symbol");
      return false;
    } else {
      await axios.post("http://localhost:8080/editprofile", registration);

      navigate("/userdashboard");
    }
  };

  return (
    <div>
      <div align="right">
        <div className="row">
          <div
            className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow"
            style={{ backgroundColor: "#F0FFFF" }}
          >
            <h2 className="text-center m-4">Edit Profile</h2>
            <form onSubmit={(e) => onSubmit(e)}>
              <div className="mb-3">
                <label htmlFor="Name" className="form-label"></label>
                <input
                  type={"text"}
                  className="form-control"
                  placeholder="Enter your First Name"
                  name="firstname"
                  value={firstname}
                  onChange={(e) => onInputChange(e)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="lastname" className="form-label"></label>
                <input
                  type={"text"}
                  className="form-control"
                  placeholder="Enter your Last Name"
                  name="lastname"
                  value={lastname}
                  onChange={(e) => onInputChange(e)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="mobileno" className="form-label"></label>
                <input
                  type={"number"}
                  className="form-control"
                  placeholder="Enter your Mobile Number"
                  name="mobileno"
                  value={mobileno}
                  onChange={(e) => onInputChange(e)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="emailid" className="form-label"></label>
                <input
                  type={"text"}
                  className="form-control"
                  placeholder="Enter your Email Id"
                  name="emailid"
                  value={emailid}
                  onChange={(e) => onInputChange(e)}
                />
              </div>
              <div>
                <input type="hidden" name="usertype" value="user" />
              </div>
              <button type="submit" className="btn btn-success">
                Submit
              </button>
              <Link className="btn btn-outline-danger mx-2" to="/userdashboard">
                Cancel
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
