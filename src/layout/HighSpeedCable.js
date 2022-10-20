import React from "react";

import Tv from "../serviceprovider/cable.png";
import { Card, CardGroup } from "react-bootstrap";

export default function HighSpeedCable() {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${Tv})`,
          height: "60vh",
          marginTop: "20px",
          fontSize: "50px",
          backgroundSize: "100%",
          backgroundRepeat: "no-repeat",
        }}
      ></div>

      <div className="container">
        <h1 class="text-danger">
          Yash<span> Broadband </span>
        </h1>
        <div className="row">
          <div className="col-md-6">
            <div className="top_content_area">
              <h3 className="text-primary">INTRODUCTION</h3>
              <p>
                It is an impeccable convergence networking solution of Data and
                Video. High Speed Fiber Internet makes working and playing less
                demanding than any time in recent memory with more reliable high
                speeds. The fiber lines go straight to your home, so you're
                perusing is as quick as would be prudent.
              </p>
            </div>
          </div>

          <div class="col-md-6">
            <div class="top_content_area">
              <h5 class="text-primary">USES</h5>
              <ul>
                <li>
                  Start up various gadgets on the double without losing speed.
                </li>
                <li>
                  {" "}
                  Offer your month to month benefit over different PCs at no
                  additional charge (requires a switch).
                </li>
                <li>
                  {" "}
                  Access your webmail when voyaging and perusing from other
                  Internet Service Providers.
                </li>
                <li>
                  {" "}
                  Committed Connection: No Worries About Oversubscription.
                </li>
                <li>
                  Symmetric Connectivity Lets You Upload Huge Files Easily.
                </li>
                <li>
                  {" "}
                  Joint effort Is Easier and FasterFiber is quicker than normal
                  broadband velocities.
                </li>
                <li>
                  {" "}
                  You can download all the more, speedier, with fiber.Fiber
                  Internet is more dependable than Wifi.
                </li>
                <li>
                  Speedier Page-Loading TimeNumerous Internet Users are
                  Supported.
                </li>
                <li>
                  Our Company provides Satellite TV with 170 and more Digital
                  stations having Digital Quality.{" "}
                </li>
                <li>live or recoded play back of occasions and so forth.</li>
                <li>More than 300 HD Channels</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
