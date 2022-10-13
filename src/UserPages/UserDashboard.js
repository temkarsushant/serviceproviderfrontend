import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState, useInsertionEffect } from "react";
import axios from "axios";
var locationid;
var providerid;
export default function UserDashboard() {
  //Passing Data between components
  const { state } = useLocation();
  const { login } = state;
  let registrationid = login.rid;

  //console.log(login.rid);
  console.log(registrationid);

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
      UserServicePojo.rid = login.rid;
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
  return (
    <div className="container">
      <div align="right">
        <Link className="btn-btn-outline-light" to="/">
          Logout
        </Link>
      </div>
      <div
        style={{
          border: "1px solid black",
          padding: "20px",
          borderRadius: "15px",
        }}
      >
        <div className="w-100 mb-9">
          Select Location :{" "}
          <select value={selected} onChange={handleChange}>
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
        <div className="w-100 mb-9">
          Select Service Provider :{" "}
          <select value={selectedprovider} onChange={handleProviderChange}>
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
          <button
            type="submit"
            className="btn btn-outline-primary"
            onClick={onSubmit}
          >
            Click Here To Get Services
          </button>
        </div>
        <div className="py-4">
          <table className="table border shadow">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Service</th>
                <th scope="col">Price</th>
                <th scope="col">Select Services</th>
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
              className="btn btn-outline-primary "
              onClick={onClick}
            >
              Click Here To Subscribe above Serives
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
