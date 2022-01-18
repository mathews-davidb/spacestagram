import { fontSize } from "@mui/system";
import React from "react";
import "./Components.css";

const TitleBar = (props) => {
  return (
    <div className="titlebar">
      <div>
        <a href="https://github.com/mathews-davidb/spacestagram.git">
          <img
            src="https://miro.medium.com/max/1125/0*sY_XTIBzlfd2zskq.png"
            style={{
              width: "200px",
              height: "auto",
              marginLeft: "-230px",
              marginTop: "5px",
            }}
          ></img>
        </a>
      </div>
      <div style={{ textAlign: "center" }}>
        <h1
          style={{
            fontFamily: "Bebas Neue",
            fontSize: "5em",
            marginTop: "0px",
            overflow: "nowrap",
          }}
        >
          Spacestagram
        </h1>
        <p
          style={{
            fontFamily: "Mukta",
            marginTop: "-60px",
            fontSize: "1.5em",
          }}
        >
          Brought to you by NASA's API
        </p>
      </div>
      <div
        style={{
          textAlign: "right",
          marginRight: "40px",
          marginTop: "-20px",
          fontFamily: "Mukta",
        }}
      >
        <h4 style={{ fontSize: "1.5em" }}>David Mathews</h4>
        <p style={{ marginTop: "-30px" }}>
          Shopify Technicnal Challenge<br></br>
          Front End Developer
        </p>
      </div>
    </div>
  );
};

export default TitleBar;
