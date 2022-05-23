import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div>
      <div style={{ textAlign: "center" }} className="container">
        <br />
        <br />
        <br />
        <br />
        <h1>Oops! Page Not Found!</h1>
      </div>
      <p>
        The page you request does not exist. Please{" "}
        {<Link to={"/"}>Click here.</Link>}
      </p>
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

export default NotFound;
