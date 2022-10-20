import React from "react";

import Ip from "../serviceprovider/IP.png";
import { Card, CardGroup } from "react-bootstrap";

export default function InternateIP() {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${Ip})`,
          height: "60vh",
          marginTop: "20px",
          fontSize: "50px",
          backgroundSize: "100%",
          backgroundRepeat: "no-repeat",
        }}
      ></div>

      <div className="container">
        <h3 className="text-primary">INTRODUCTION</h3>
        <p>
          With our own IPTV, OTT and Multiscreen Service, we are the first and
          only organization giving multiscreen benefit android enclose India. It
          gives brilliant TV experience without any up gradation of your old TV.
          This permits IPTV and OTT specialist co-ops the adaptability to
          institutionalize their equipment and oblige new screen resolutions and
          encoding gauges without significant hardware changes.
        </p>
      </div>
    </div>
  );
}
