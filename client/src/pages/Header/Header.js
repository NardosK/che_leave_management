import React, { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../logo.png";
import { UserContext } from "../../context/UserContext";

function Header() {
  const [userData, setUserData] = useContext(UserContext);
  const navigate = useNavigate();

  return (
    <div className="wrap-pic1">
      <div>
        <img
          src={Logo}
          alt="LOGO"
          onClick={() => {
            navigate("/");
          }}
        />
      </div>
      {userData[0] && (
        <div className="header_info">
          <div>
            <button>
              Welcome {userData[0].fullName.split(" ")[0]}
              {", "}
            </button>
          </div>
          <div>
            <button
              onClick={() => {
                setUserData({});
              }}
            >
              Log out
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;
