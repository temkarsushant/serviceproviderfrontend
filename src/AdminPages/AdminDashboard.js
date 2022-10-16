import axios from "axios";
import React, { useInsertionEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
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

  //Get User Details
  const [users, serUserRequests] = useState([]);

  useInsertionEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:8080/getUserServices");
    console.log(result.data);
    serUserRequests(result.data);
  };

  //Approve

  let navigate = useNavigate();

  const onClickApprove = async (e) => {
    e.preventDefault();
    var ruid = e.target.value;
    console.log(e.target.value);

    const result = await axios
      .post("http://localhost:8080/updateuserservice", ruid)
      .catch(function (error) {
        if (error.response) {
          alert("Failed to Approve user service");
          navigate("/admindashboard");
        }
      });
    console.log("data--", result.data);
    if (result.data != null && result.data !== "") {
      alert("User Request Approved");
      loadUsers();
      navigate("/admindashboard");
    } else {
      alert("Failed to Approve user service");
      navigate("/admindashboard");
    }
  };

  // Reject

  const onClickReject = async (e) => {
    e.preventDefault();
    var ruid = e.target.value;
    console.log(e.target.value);

    const result = await axios
      .post("http://localhost:8080/rejectuserservice", ruid)
      .catch(function (error) {
        if (error.response) {
          alert("Failed to reject user service");
          navigate("/admindashboard");
        }
      });
    console.log("data--", result.data);
    if (result.data != null && result.data !== "") {
      alert("User Request Rejected");
      loadUsers();
      navigate("/admindashboard");
    } else {
      alert("Failed to reject user service");
      navigate("/admindashboard");
    }
  };

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

      <div className="py-4">
        <table className="table border shadow">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Email Id</th>
              <th scope="col">Mobile No</th>
              <th scope="col">Request Type</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          {/*GetMapping*/}

          <tbody>
            {users.map((user, index) => (
              <tr>
                <th scope="row" key={index}>
                  {index + 1}
                </th>
                <td>{user.firstname}</td>
                <td>{user.lastname}</td>
                <td>{user.emialid}</td>
                <td>{user.mobileno}</td>
                <td>{user.userrequest}</td>
                <td>
                  <button
                    className="btn btn-success mx-2"
                    value={user.usid}
                    onClick={onClickApprove}
                  >
                    Approve
                  </button>
                  <button
                    className="btn btn-danger mx-2"
                    value={user.usid}
                    onClick={onClickReject}
                  >
                    Reject
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
          {/*GetMapping*/}
        </table>
      </div>
    </div>
  );
}
