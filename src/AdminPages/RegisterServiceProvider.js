import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState, useInsertionEffect } from "react";
import axios from "axios";
import ImageTest from "../serviceprovider/UserDash.png";
export default function RegisterServiceProvider() {
  let navigate = useNavigate();
  const [registration, setUser] = useState({
    rid: "1",
    sname: "",
    city: "",
    categoryname: "",
    price: "",
  });

  const { rid, sname, city, categoryname, password, confirmpassword, price } =
    registration;

  const onInputChange = (e) => {
    setUser({ ...registration, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log("In validation", registration);
    if (registration.sname === "" || registration.sname == null) {
      alert("Please Enter Service Provider Name");
      return false;
    } else if (registration.city === "" || registration.city == null) {
      alert("Please Enter City");
      return false;
    } else if (
      registration.categoryname === "" ||
      registration.categoryname == null
    ) {
      alert("Please Enter Category Name");
      return false;
    } else if (price === "" || price == null) {
      alert("Please Enter Price");
      return false;
    } else {
      const result = await axios.post(
        "http://localhost:8080/registerserviceprovider",
        registration
      );

      console.log("In register service provider", result.data);
      navigate("/admindashboard");
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
            <h2 className="text-center m-4">Register Service Provider</h2>
            <form onSubmit={(e) => onSubmit(e)}>
              <div>
                <input type="hidden" name="rid" value="user" />
              </div>
              <div className="mb-3">
                <label htmlFor="sname" className="form-label"></label>
                <input
                  type={"text"}
                  className="form-control"
                  placeholder="Enter Service Provider Name"
                  name="sname"
                  value={sname}
                  onChange={(e) => onInputChange(e)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="city" className="form-label"></label>
                <input
                  type={"text"}
                  className="form-control"
                  placeholder="Enter City"
                  name="city"
                  value={city}
                  onChange={(e) => onInputChange(e)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="categoryname" className="form-label"></label>
                <input
                  type={"text"}
                  className="form-control"
                  placeholder="Enter Category Name"
                  name="categoryname"
                  value={categoryname}
                  onChange={(e) => onInputChange(e)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="price" className="form-label"></label>
                <input
                  type={"number"}
                  className="form-control"
                  placeholder="Enter Price"
                  name="price"
                  value={price}
                  onChange={(e) => onInputChange(e)}
                />
              </div>

              <button type="submit" className="btn btn-success">
                Submit
              </button>
              <Link
                className="btn btn-danger mx-2"
                to="/admindashboard"
              >
                Cancel
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
