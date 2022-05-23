import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../logo.png";

function Header() {
  const navigate = useNavigate();
  return (
    <div
      className="wrap-pic1"
      onClick={() => {
        navigate("/");
      }}
    >
      <img src={Logo} alt="LOGO" />
    </div>
  );
}

export default Header;
