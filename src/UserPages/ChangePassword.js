import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function ChangePassword() {
  let navigate = useNavigate();

  const [login, setUser] = useState({
    emailid: "",
    password: "",
    confirmnewpassword: "",
  });
  const { emailid, password, confirmnewpassword } = login;

  const onInputChange = (e) => {
    setUser({ ...login, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(login);
    if (login.emailid === "" || login.emailid == null) {
      alert("Please enter Email Id");
      return false;
    } else if (login.emailid.search("@") == -1) {
      alert("Email Id Must contain @ symbol");
      return false;
    } else if (login.password === "" || login.password == null) {
      alert("Please Enter New Password");
      return false;
    } else if (login.password.length < 8) {
      alert("Password must contain 8 characters or more than 8 characters");
      return false;
    } else if (
      login.confirmnewpassword === "" ||
      login.confirmnewpassword == null
    ) {
      alert("Please Enter confirm password");
      return false;
    } else if (login.password !== login.confirmnewpassword) {
      alert("Password And Confirmed Password is not matching");
      return false;
    }
    const result = await axios
      .post("http://localhost:8080/confirmpassword", login)
      .catch(function (error) {
        if (error.response) {
          alert("Username is wrong, Please try again");
          navigate("/userlogin");
        }
      });

    //console.log(result.data);
    // if(result.data)
    setUser(result.data);
    // navigate("/userdashboard");
    //Passing Data between components
    console.log("test", result.data);
    if (result.data !== null && result.data !== "") {
      navigate("/userlogin");
    } else {
      alert("Username is wrong, Please try again");
      navigate("/userlogin");
      return false;
    }
  };
  return (
    <div>
      {" "}
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4" style={{ color: "black" }}>
            Change Password
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
                placeholder="Enter your New Password"
                name="password"
                value={password}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <label style={{ color: "red", fontSize: "10px" }}>
              Password must be consist of at least 8 characters.
            </label>
            <div className="mb-3">
              <label
                htmlFor="confirmnewpassword"
                className="form-label"
              ></label>
              <input
                type={"confirmnewpassword"}
                className="form-control"
                placeholder="Enter your confirm Password"
                name="confirmnewpassword"
                value={confirmnewpassword}
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
