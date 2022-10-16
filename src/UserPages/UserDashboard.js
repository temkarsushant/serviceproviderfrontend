import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState, useInsertionEffect } from "react";
import axios from "axios";
import ImageTest from "../serviceprovider/UserDash.png";
var locationid;
var providerid;
var registrationid;
var temprid;
export default function UserDashboard() {
  //Passing Data between components
  const { state } = useLocation();
  if (state !== null) {
    var { login } = state;
    var rid = login.rid;
  }
  temprid = rid;
  if (temprid != null && temprid !== "") {
    registrationid = temprid;
  }
  //Get Locations ---
  const [locations, setLocations] = useState([]);

  useInsertionEffect(() => {
    loadlocations();
  }, []);

  const loadlocations = async () => {
    const result = await axios.get("http://localhost:8080/getAddress");
    setLocations(result.data);
    //   console.log(result.data);
  };

  const [selected, setSelected] = useState("Select Location");

  const handleChange = (event) => {
    console.log(event.target.value);
    locationid = event.target.value;
    console.log("Location id:", locationid);
    setSelected(event.target.value);
  };

  //Get Locations ---

  //Get Providers for drop down ---
  const [selectedprovider, setSelectedprovider] = useState("Select Provider");

  const handleProviderChange = (event) => {
    console.log(event.target.value);
    providerid = event.target.value;
    console.log("Provider id:", providerid);
    console.log("Location id:", locationid);
    setSelected(event.target.value);
  };

  //Get Providers for drop down---

  // Get Peoviders---
  const [providers, setServiceProviders] = useState([]);

  useInsertionEffect(() => {
    loadproviders();
  }, []);

  const loadproviders = async () => {
    const result = await axios.get("http://localhost:8080/getServiceProviders");
    setServiceProviders(result.data);
  };

  //---Get Providers
  let navigate = useNavigate();
  const [serviceProvider, setCategories] = useState({
    aid: locationid,
    sid: providerid,
  });

  const [serviceProviders, setCategoriesgetdata] = useState([]);

  useInsertionEffect(() => {
    onSubmit();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    serviceProvider.aid = locationid;
    serviceProvider.sid = providerid;
    console.log("IN submit", serviceProvider.aid);
    console.log("IN submit", serviceProvider.sid);
    const result = await axios
      .post(
        "http://localhost:8080/getServiceProvidersCategories",
        serviceProvider
      )
      .catch(function (error) {
        if (error.response) {
          alert("No Service Provider Categories found");
          //  navigate("/userdashboard");
        }
      });
    console.log(result.data);
    // if(result.data)
    setCategoriesgetdata(result.data);
    // navigate("/userdashboard");
    //Passing Data between components
    //navigate("/userdashboard", { state: { login: result.data } });
  };

  //Checkbox

  const [checked, setChecked] = useState(false);

  const [UserServicePojo, setuserservices] = useState({
    rid: "",
    cid: "",
    userrequest: "",
    reviews: "",
    isPayment: "",
    uid: "",
  });

  const [userservicess, setuserservicesdata] = useState([]);

  useInsertionEffect(() => {
    handleCheckboxChange();
  }, []);
  var tempuid;
  const handleCheckboxChange = async (e) => {
    console.log(e.target.value);
    setChecked(e.checked);

    if (e.target.checked) {
      UserServicePojo.cid = e.target.value;
      UserServicePojo.rid = registrationid;
      UserServicePojo.userrequest = "Pending";
      UserServicePojo.isPayment = false;
      console.log("In userservice", UserServicePojo);
      console.log(providerid);
      console.log("✅ Checkbox is checked");

      const result = await axios
        .post("http://localhost:8080/saveUserService", UserServicePojo)
        .catch(function (error) {
          if (error.response) {
            alert("Failed add user service");
            //  navigate("/userdashboard");
          }
        });
      console.log("data--", result.data);
      // if(result.data)
      tempuid = result.data;
      console.log(userservicess);
      setuserservicesdata(result.data);
    } else {
      console.log("⛔️ Checkbox is NOT checked");
      // UserServicePojo.uid = tempuid;
      // console.log("Delete ", UserServicePojo);
      const result = await axios
        .post("http://localhost:8080/deleteuserservice", UserServicePojo)
        .catch(function (error) {
          if (error.response) {
            alert("Not able to remove service");
            //  navigate("/userdashboard");
          }
        });
      console.log("data--", result.data);
      // if(result.data)
      //tempuid = result.data;
      setuserservicesdata(result.data);
    }
  };

  //Payment

  const onClick = async (e) => {
    e.preventDefault();
    navigate("/userpayment", { state: { login: login } });
  };

  //Get My Services
  //Get User Details
  const [users, serUserRequests] = useState([]);

  useInsertionEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    console.log(registrationid);
    const result = await axios.post(
      "http://localhost:8080/getMyServices",
      registrationid
    );
    console.log(result.data);
    serUserRequests(result.data);
  };

  return (
    <div>
      <div align="right">
        <Link className="btn btn-info mx-2" to="/editprofile">
          Edit Profile
        </Link>
        <Link className="btn btn-info" to="/">
          Logout
        </Link>
      </div>

      <div>
        <img
          src={ImageTest}
          alt="BigCo Inc. logo"
          style={{ height: "70vh", width: "207vh" }}
          align="left"
        />
      </div>
      <div style={{ backgroundColor: "#F0FFFF" }}>
        <label style={{ color: "green", fontSize: "40px" }}>
          Check Our Services Now
        </label>
        <div
          className="w-100 mb-9"
          style={{ color: "#2F4F4F", fontSize: "20px" }}
        >
          Select Location :{" "}
          <select
            value={selected}
            onChange={handleChange}
            style={{ color: "#2F4F4F", fontSize: "20px" }}
          >
            {locations.map((location) => (
              <option key={location.aid} value={location.aid}>
                {location.city}
              </option>
            ))}
          </select>
        </div>
        <div>
          <br />
        </div>
        <div
          className="w-100 mb-9"
          style={{ color: "#2F4F4F", fontSize: "20px" }}
        >
          Select Service Provider :{" "}
          <select
            value={selectedprovider}
            onChange={handleProviderChange}
            style={{ color: "#2F4F4F", fontSize: "20px" }}
          >
            {providers.map((provider) => (
              <option key={provider.sid} value={provider.sid}>
                {provider.sname}
              </option>
            ))}
          </select>
        </div>
        <div>
          <br />
        </div>
        <div>
          <button type="submit" className="btn btn-success" onClick={onSubmit}>
            Click Here To Get Services
          </button>
        </div>
        <div className="py-4">
          <table className="table border shadow">
            <thead>
              <tr>
                <th scope="col" style={{ color: "#2F4F4F", fontSize: "15px" }}>
                  #
                </th>
                <th scope="col" style={{ color: "#2F4F4F", fontSize: "15px" }}>
                  Service
                </th>
                <th scope="col" style={{ color: "#2F4F4F", fontSize: "15px" }}>
                  Price
                </th>
                <th scope="col" style={{ color: "#2F4F4F", fontSize: "15px" }}>
                  Select Services
                </th>
              </tr>
            </thead>
            {/*GetMapping*/}

            <tbody>
              {serviceProviders.map((provider, index) => (
                <tr>
                  <th scope="row" key={index}>
                    {index + 1}
                  </th>
                  <td>{provider.categoryname}</td>
                  <td>{provider.price}</td>

                  <td>
                    <input
                      type="checkbox"
                      value={provider.cid}
                      checked={checked}
                      onChange={handleCheckboxChange}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
            {/*GetMapping*/}
          </table>
        </div>
        <div>
          <br />
        </div>
        <div>
          <form>
            <button
              type="submit"
              className="btn btn-success "
              onClick={onClick}
            >
              Click Here To Subscribe above Serives
            </button>
          </form>
        </div>
      </div>
      <div>
        <div className="py-4">
          <table className="table border shadow">
            <thead>
              <label style={{ color: "green", fontSize: "22px" }}>
                My Services
              </label>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Service Provider</th>
                <th scope="col">Service</th>
                <th scope="col">Price</th>
              </tr>
            </thead>
            {/*GetMapping*/}

            <tbody>
              {users.map((user, index) => (
                <tr>
                  <th scope="row" key={index}>
                    {index + 1}
                  </th>
                  <td>{user.sname}</td>
                  <td>{user.categoryname}</td>
                  <td>{user.price}</td>
                </tr>
              ))}
            </tbody>
            {/*GetMapping*/}
          </table>
        </div>
      </div>
    </div>
  );
}
