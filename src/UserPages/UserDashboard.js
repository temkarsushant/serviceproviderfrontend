import React from "react";
import { useLocation } from "react-router-dom";

export default function UserDashboard() {
    //Passing Data between components
  const { state } = useLocation();
  const { login } = state;
  console.log(login);

  return <div>UserDashboard</div>;
}
