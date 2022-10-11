import logo from "./logo.svg";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./layout/Navbar";
import RegisterUser from "./userauthentication/RegisterUser";
import LoginDashboard from "./userauthentication/LoginDashboard";
import UserLogin from "./userauthentication/UserLogin";
import AdminLogin from "./userauthentication/AdminLogin";
import UserDashboard from "./UserPages/UserDashboard";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />

        <Routes>
          <Route exact path="/" element={<LoginDashboard />} />
          <Route exact path="/registeruser" element={<RegisterUser />} />
          <Route exact path="/userlogin" element={<UserLogin />} />
          <Route exact path="/adminlogin" element={<AdminLogin />} />
          <Route exact path="/userdashboard" element={<UserDashboard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
