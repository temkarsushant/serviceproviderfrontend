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
import UserPayment from "./UserPages/UserPayment";
import Footer from "./layout/Footer";
import AdminDashboard from "./AdminPages/AdminDashboard";
import RegisterAdmin from "./AdminPages/RegisterAdmin";
import RegisterServiceProvider from "./AdminPages/RegisterServiceProvider";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<LoginDashboard />} />
          <Route exact path="/registeruser" element={<RegisterUser />} />
          <Route exact path="/registeradmin" element={<RegisterAdmin />} />
          <Route exact path="/userlogin" element={<UserLogin />} />
          <Route exact path="/adminlogin" element={<AdminLogin />} />
          <Route exact path="/userdashboard" element={<UserDashboard />} />
          <Route exact path="/admindashboard" element={<AdminDashboard />} />
          <Route exact path="/userpayment" element={<UserPayment />} />
          <Route
            exact
            path="/registerserviceprovider"
            element={<RegisterServiceProvider />}
          />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
