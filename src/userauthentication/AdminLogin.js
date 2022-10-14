import React, { useEffect, useState, useInsertionEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import ImageTest from "../serviceprovider/Group.png";
export default function AdminLogin() {
  let navigate = useNavigate();

  const [login, setUser] = useState({
    emailid: "",
    password: "",
  });

  const { emailid, password } = login;

  const onInputChange = (e) => {
    setUser({ ...login, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(login.emailid);
    console.log(login.password);
    if (login.emailid === "" || login.emailid == null) {
      alert("Please enter Email Id");
      return false;
    } else if (login.password === "" || login.password == null) {
      alert("Please Enter Password");
      return false;
    }
    const result = await axios
      .post("http://localhost:8080/adminlogin", login)
      .catch(function (error) {
        if (error.response) {
          alert("Username or Password is wrong, Please try again");
          navigate("/userlogin");
        }
      });
    console.log(result.data);
    // if(result.data)
   // setUser(result.data);
    // navigate("/userdashboard");
    //Passing Data between components
    console.log("test", result.data);
    if (result.data !== null && result.data !== "") {
      navigate("/admindashboard", { state: { login: result.data } });
    } else {
      alert("Username or Password is wrong, Please try again");
      navigate("/adminlogin");
      return false;
    }
  };

  return (
    <div
      className="container"
      style={{
        backgroundImage: `url(${ImageTest})`,
        height: "100vh",
        backgroundSize: "100%",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4" style={{ color: "white" }}>
            Admin Login
          </h2>
          <form onSubmit={(e) => onSubmit(e)}>
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
            <div className="mb-3">
              <label htmlFor="password" className="form-label"></label>
              <input
                type={"password"}
                className="form-control"
                placeholder="Enter your Password"
                name="password"
                value={password}
                onChange={(e) => onInputChange(e)}
              />
            </div>

            <button type="submit" className="btn btn-success">
              Submit
            </button>
            <Link className="btn btn-danger mx-2" to="/">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
