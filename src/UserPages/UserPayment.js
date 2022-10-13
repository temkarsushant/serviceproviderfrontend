import axios from "axios";
import { Field } from "formik";
import React, { useInsertionEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../layout/Navbar";

export default function UserPayment() {
  //Passing Data between components
  const { state } = useLocation();
  const { login } = state;
  let registrationid = login.rid;

  useInsertionEffect(() => {
    loadUsers();
  }, []);

  const [UserServicePojo, setuserservices] = useState({
    rid: "",
  });

  const [userss, setuserservicess] = useState();

  const loadUsers = async () => {
    UserServicePojo.rid = registrationid;
    console.log(UserServicePojo);
    const result = await axios.post(
      "http://localhost:8080/getUserServicesbyid",
      UserServicePojo
    );
    console.log(result.data);
    setuserservicess(result.data);
  };

  //Card Payment
  let navigate = useNavigate();
  const [payment, setUser] = useState({
    cardnumber: "",
    mm: "",
    yy: "",
    cvv: "",
    name: "",
    isPayment: true,
  });

  const { cardnumber, mm, yy, cvv, name, isPayment } = payment;

  const onInputChange = (e) => {
    setUser({ ...payment, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (payment.cardnumber === "" || payment.cardnumber == null) {
      alert("Please Enter Card Number");
      return false;
    } else if (payment.mm === "" || payment.mm == null) {
      alert("Please Enter Month on mm format");
      return false;
    } else if (payment.yy === "" || payment.yy == null) {
      alert("Please Enter Year in YY format");
      return false;
    } else if (payment.cvv === "" || payment.cvv == null) {
      alert("Please Enter CVV");
      return false;
    } else if (payment.name === "" || payment.name == null) {
      alert("Please Enter your name on card");
      return false;
    } else {
      console.log("In post", UserServicePojo.rid);
      payment.rid = UserServicePojo.rid;
      payment.isPayment = true;
      await axios.post("http://localhost:8080/serUserpayment", payment);
      var ss = prompt("Please confirm to proceed");
      console.log(ss);
      var a = window.confirm("Please type Confirm to proceed!");
      if (a) {
        alert(
          "Payment Successfully, Please Login again to Enjoy more services"
        );
      } else {
        alert("Payment Failed, Please try again after login");
      }
      navigate("/");
    }
  };
  //console.log(login.rid);
  console.log("On Payment", registrationid);
  return (
    <div className="container">
      <div className="py-4">
        <table className="table border shadow">
          <thead>
            <tr>
              <th scope="col">Total Amount Need to Payment</th>
            </tr>
          </thead>
          {/*GetMapping*/}
          <tbody>
            <tr>
              <td className="fa fa-inr">
                {"\u20B9"}
                {userss}
              </td>
            </tr>
          </tbody>
          {/*GetMapping*/}
        </table>
      </div>
      <div>
        <form
          style={{
            border: "1px solid black",
            padding: "20px",
            borderRadius: "15px",
          }}
          onSubmit={(e) => onSubmit(e)}
        >
          <div>
            <label htmlFor="Name" className="form-label">
              Credit Card Payment
            </label>
          </div>

          <div className="form-group mx-2">
            <input
              type={"number"}
              className="w-50 mb-9"
              placeholder="Enter your 16 digit card number"
              name="cardnumber"
              value={cardnumber}
              onChange={(e) => onInputChange(e)}
            />

            <label htmlFor="cvv" className="form-label mb-9  mx-2"></label>
            <input
              type={"number"}
              className="w-10 mx-9"
              placeholder="cvv"
              name="cvv"
              value={cvv}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div>
            <br></br>
          </div>
          <div className="mb-2 mx-2">
            <input
              type={"text"}
              className="w-50"
              placeholder="Enter Name on Card"
              name="name"
              value={name}
              onChange={(e) => onInputChange(e)}
            />
            <input
              type={"number"}
              className="w-5 mx-2"
              style={{ width: "10%" }}
              placeholder="mm"
              name="mm"
              value={mm}
              onChange={(e) => onInputChange(e)}
            />
            /
            <input
              type={"number"}
              maxLength="2"
              className="w-5 mx-2"
              style={{ width: "10%" }}
              placeholder="YY"
              name="yy"
              value={yy}
              pattern="[1-9]{1}[0-9]{9}"
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div>
            <br></br>
          </div>
          <div>
            <input type="hidden" name="usertype" value="user" />
          </div>

          <button type="submit" className="btn btn-outline-primary">
            Pay Now
          </button>
          <Link className="btn btn-outline-danger mx-2" to="/">
            Cancel
          </Link>
        </form>
      </div>
    </div>
  );
}
