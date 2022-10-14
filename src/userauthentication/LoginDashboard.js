import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../layout/Navbar";
import ImageTest from "../images/top-dth-providers.jpg";

import Telecom from "../serviceprovider/all_service_banner.jpg";
import Card1 from "../serviceprovider/Card1.png";
import Card2 from "../serviceprovider/Card2.png";
import Card3 from "../serviceprovider/Card3.png";
import Card4 from "../serviceprovider/image.png";
import { Button } from "bootstrap";
import { Card, CardGroup } from "react-bootstrap";
export default function LoginDashboard() {
  const myStyle = {
    backgroundImage: "url('./images/top-dth-providers.jpg')",
    height: "50vh",
    marginTop: "-70px",
    fontSize: "50px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${Telecom})`,
          height: "80vh",
          width: "210vh",
          backgroundSize: "100%",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <div style={{ backgroundColor: "#FFFAFA" }}>
        <div style={{ paddingTop: "20px", paddingBottom: "20px" }}>
          <div align="center" style={{ paddingRight: "20px" }}>
            <button className="btn btn-outline-primary">
              <Link className="btn-btn-outline-light" to="/registeruser">
                {" "}
                New user? Click Here to Register
              </Link>
            </button>
          </div>
          <div align="center" style={{ paddingRight: "20px" }}>
            <button className="btn btn-outline-primary">
              <Link className="btn-btn-outline-light" to="/userlogin">
                Already User? Login here
              </Link>
            </button>
          </div>
          <div align="center" style={{ paddingRight: "20px" }}>
            <button className="btn btn-outline-primary">
              <Link className="btn-btn-outline-light" to="/adminlogin">
                Admin Login
              </Link>
            </button>
          </div>{" "}
        </div>
      </div>
      <div>
        <div>
          <CardGroup>
            <Card style={{ backgroundColor: "#F0FFFF" }}>
              <Card.Img
                variant="top"
                src={Card1}
                style={{
                  height: "20vh",
                  width: "50vh",
                  paddingLeft: "120px",
                  paddingTop: "20px",
                }}
              />
              <Card.Body>
                <Card.Title>High Speed Fiber Internet</Card.Title>
                <Card.Text>
                  Lighting High Speed Internet is being experienced by the
                  users, Tripleplay provides upto100 Mbps speed in a very low
                  price.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Yash Service Provider</small>
              </Card.Footer>
            </Card>
            <Card style={{ backgroundColor: "#F0FFFF" }}>
              <Card.Img
                variant="top"
                src={Card2}
                style={{
                  height: "20vh",
                  width: "50vh",
                  paddingLeft: "120px",
                  paddingTop: "20px",
                }}
              />
              <Card.Body>
                <Card.Title>IPTV/OTT</Card.Title>
                <Card.Text>
                  We have our own IPTV, OTT Service. We are the first and only
                  company providing multiscreen service with android box in
                  India{" "}
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Yash Service Provider</small>
              </Card.Footer>
            </Card>
            <Card style={{ backgroundColor: "#F0FFFF" }}>
              <Card.Img
                variant="top"
                src={Card3}
                style={{
                  height: "20vh",
                  width: "50vh",
                  paddingLeft: "120px",
                  paddingTop: "20px",
                }}
              />
              <Card.Body>
                <Card.Title>Digital HD Cabel</Card.Title>
                <Card.Text>
                  We gives more than 300 Digital and HD channels not as much as
                  cost of DTH and have tie-up with numerous MSO.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Yash Service Provider</small>
              </Card.Footer>
            </Card>
          </CardGroup>
        </div>
      </div>
    </div>
  );
}
