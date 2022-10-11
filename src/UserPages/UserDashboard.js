import React from "react";
import { useLocation } from "react-router-dom";
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

  return (
    <div className="container">
      <div className="card mx=2">
        Select Location{" "}
        <select value={selected} onChange={handleChange}>
          {locations.map((location) => (
            <option key={location.aid} value={location.aid}>
              {location.city}
            </option>
          ))}
        </select>
      </div>

      <div className="card mx=4">
        Select Service Provider{" "}
        <select value={selectedprovider} onChange={handleProviderChange}>
          {providers.map((provider) => (
            <option key={provider.sid} value={provider.sid}>
              {provider.sname}
            </option>
          ))}
        </select>
      </div>

      <div className="py-4">
        <table className="table border shadow">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">sid</th>
              <th scope="col">sname</th>
            </tr>
          </thead>
          {/*GetMapping*/}

          <tbody>
            {providers.map((provider, index) => (
              <tr>
                <th scope="row" key={index}>
                  {index + 1}
                </th>
                <td>{provider.sid}</td>
                <td>{provider.sname}</td>

                <td>
                  <button className="btn btn-primary mx-2">View</button>
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
