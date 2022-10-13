import React, { useEffect, useState, useInsertionEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
export default function UserLogin() {
  let navigate = useNavigate();

  const [login, setUser] = useState({
    emailid: "",
    password: "",
  });

  //const [login,setUsers]=useState([])

  /*useInsertionEffect(()=>{
    loadUsers();
},[])*/
  /*
const loadUsers=async()=>{
    const result=await axios.get("http://localhost:8080/login", login)
    setUser(result.data);
}
*/

  const { emailid, password } = login;

  const onInputChange = (e) => {
    setUser({ ...login, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(login.emailid);
    if (login.emailid === "" || login.emailid == null) {
      alert("Please enter Email Id");
      return false;
    } else if (login.password === "" || login.password == null) {
      alert("Please Enter Password");
      return false;
    }
    const result = await axios
      .post("http://localhost:8080/login", login)
      .catch(function (error) {
        if (error.response) {
          alert("Username or Password is wrong, Please try again");
          navigate("/userlogin");
        }
      });
    //console.log(result.data);
    // if(result.data)
    setUser(result.data);
    // navigate("/userdashboard");
    //Passing Data between components
    navigate("/userdashboard", { state: { login: result.data } });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">User Login</h2>
          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="emailid" className="form-label">
                Email Id
              </label>
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
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type={"password"}
                className="form-control"
                placeholder="Enter your Password"
                name="password"
                value={password}
                onChange={(e) => onInputChange(e)}
              />
            </div>

            <button type="submit" className="btn btn-outline-primary">
              Submit
            </button>
            <Link className="btn btn-outline-danger mx-2" to="/">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
