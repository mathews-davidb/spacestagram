import React from "react";
import "./Components.css";

const Loading = (props) => {
  return (
    <div
      className="load-screen"
      style={{ display: "flex", justifyContent: "center", marginTop: "200px" }}
    >
      <div className="loader"></div>
    </div>
  );
};

export default Loading;
