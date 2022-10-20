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
import ChangePassword from "./UserPages/ChangePassword";
import Feedback from "./UserPages/Feedback";
import EditProfile from "./UserPages/EditProfile";
import AboutUs from "./layout/AboutUs";
import DigirtalHDCable from "./layout/DigitalHDCable";
import InternateIp from "./layout/InternateIP";
import HighSpeedCable from "./layout/HighSpeedCable";
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
          <Route exact path="/changepassword" element={<ChangePassword />} />
          <Route exact path="/feedback" element={<Feedback />} />
          <Route exact path="/editprofile" element={<EditProfile />} />

          <Route exact path="/aboutus" element={<AboutUs />} />
          <Route exact path="/digitalhdcable" element={<DigirtalHDCable />} />
          <Route exact path="/internateip" element={<InternateIp />} />
          <Route exact path="/highspeedcable" element={<HighSpeedCable />} />
          
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
