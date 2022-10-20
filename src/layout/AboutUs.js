import React from "react";

import About from "../serviceprovider/tv.png";
import { Card, CardGroup } from "react-bootstrap";
export default function AboutUs() {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${About})`,
          height: "60vh",
          marginTop: "20px",
          fontSize: "50px",
          backgroundSize: "100%",
          backgroundRepeat: "no-repeat",
        }}
      ></div>

      <div className="container">
        <h1 class="text-danger">
          About <span>Us</span>
        </h1>
        <div className="row">
          <div className="col-md-6">
            <div className="top_content_area">
              <h3 className="text-primary">INTRODUCTION</h3>
              <p>
                We are pleased to introduce ourselves as the Fiber to the home
                (FTTH) Service provider Company through GPON Technology (Fiber
                to the Home). Our organization known as 'Computerized Fiber
                Internet' is giving services like Digital Cable TV,IP TV, Basic
                Telephone, High speed web and VoIP in Delhi NCR and some of
                other city's of Haryana and furthermore Ghaziabad (UP) and other
                city's of North India.
                <br />
                <br />
                Gigabit Passive Optical Networks (GPON) provides a capacity
                boosts in both the aggregate transfer speed and data
                transmission productivity using bigger, variable-length bundles
                in PON innovation.
              </p>
            </div>
          </div>

          <div class="col-md-6">
            <div class="top_content_area">
              <h5 class="text-primary">IT HAS TWO ADVANTAGES:</h5>
              <ul>
                <li>
                  The first is the usage of the new encircling system called the
                  Generic Framing Method (GEM) which permits both Ethernet and
                  TDM activity on a GPON connect.
                </li>
                <li>
                  The second advantage is the expanded uplink and downlink. Not
                  at all like different frameworks, GPON moves execution into
                  the gigabit go. The G.984 particular characterizes GPON
                  downlink paces of rather 1.25 or 2.5 Gbit and uplink rates of
                  155 Mbit, 622 Mbit, 1.25 Gbit, or 2.5 Gbit, which are a
                  quantum jump over the current BPON frameworks.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
