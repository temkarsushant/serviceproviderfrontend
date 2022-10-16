import React from "react";
import YashLogo from "../images/YashLogo.png";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import { SocialIcon } from "react-social-icons";
export default function Footer() {
  return (
    <div>
      <MDBFooter
        bgColor="light"
        className="text-center text-lg-start text-muted"
      >
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          <div className="me-5 d-none d-lg-block">
            <span>Get connected with us on social networks</span>
          </div>

          <div align="center">
            <a href="" className="me-4 text-reset">
              <SocialIcon url="https://twitter.com/jaketrent" />
            </a>
            <a href="" className="me-4 text-reset">
              <SocialIcon url="https://www.facebook.com/jaketrent" />
            </a>
            <a href="" className="me-4 text-reset">
              <SocialIcon url="https://www.google.com/jaketrent" />
            </a>
            <a href="" className="me-4 text-reset">
              <SocialIcon url="https://www.instagram.com/jaketrent" />
            </a>
            <a href="" className="me-4 text-reset">
              <SocialIcon url="https://www.linked.com/jaketrent" />
            </a>
            <a href="" className="me-4 text-reset">
              <MDBIcon fab icon="github" />
            </a>
          </div>
        </section>

        <section className="">
          <MDBContainer className="text-center text-md-start mt-5">
            <MDBRow className="mt-3">
              <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  <div>
                    <img
                      src={YashLogo}
                      alt="Yash Inc. logo"
                      style={{ width: "130px", height: "80px" }}
                      align="left"
                    />
                  </div>
                </h6>
                <p>
                  Yash Service Provider is very large and old service provider.
                  We provide services such as Internet, Calling and other
                  network services.
                </p>
              </MDBCol>

              <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Products</h6>
                <p>
                  <a href="#!" className="text-reset">
                    Cabel
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Internet
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    IP
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Router
                  </a>
                </p>
              </MDBCol>

              <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
                <p>
                  <a href="#!" className="text-reset">
                    About
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Settings
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Orders
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Help
                  </a>
                </p>
              </MDBCol>

              <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p>
                  <MDBIcon icon="home" className="me-3" />
                  Magarpatta, Pune, India
                </p>
                <p>
                  <MDBIcon icon="envelope" className="me-3" />
                  Sushant.Temkar@yash.com
                </p>
                <p>
                  <MDBIcon icon="envelope" className="me-3" />
                  Rupali.Patil@yash.com
                </p>
                <p>
                  <MDBIcon icon="phone" className="me-3" /> +91 7972501198
                </p>
                <p>
                  <MDBIcon icon="print" className="me-3" /> +91 9860898519
                </p>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>

        <div
          className="text-center p-4"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
        >
          © 2022 Copyright:
          <a className="text-reset fw-bold" href="#">
            YashServiceProvider.com
          </a>
        </div>
      </MDBFooter>
    </div>
  );
}
