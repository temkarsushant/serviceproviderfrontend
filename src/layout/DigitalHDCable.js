import React from "react";

import Tv from "../serviceprovider/tvcable.png";
import { Card, CardGroup } from "react-bootstrap";

export default function DigitalHDCable() {
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
          Digital <span>Cable TV </span>
        </h1>
        <div className="row">
          <div className="col-md-6">
            <div className="top_content_area">
              <h3 className="text-primary">INTRODUCTION</h3>
              <p>
                Hi-definition HD is the new mantra for appreciating TV on all
                level board screens. Yash Services gives more than 300 Digital
                and HD channels not as much as cost of DTH and have tie-up with
                numerous MSO like DEN, Siti Cable, in Cable and others.
              </p>
            </div>
          </div>

          <div class="col-md-6">
            <div class="top_content_area">
              <h5 class="text-primary">BENEFITS</h5>
              <ul>
                <li>
                  Our Company provides Satellite TV with 170 and more Digital
                  stations having Digital Quality. We would be in a position to
                  give better quality than DTH too.
                </li>
                <li>
                  Value added services – Such as shopping on the web, Video
                  scope of occasions, live or recoded play back of occasions and
                  so forth.
                </li>
                <li>More than 300 HD Channels</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
