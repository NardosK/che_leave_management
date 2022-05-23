import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../logo.png";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

function Login() {
  const [isSignIn, setSignIn] = useState(true);

  const handleLogin = () => {
    setSignIn(!isSignIn);
  };

  return (
    <div className="size1 bg0 where1-parent">
      {/* <!-- Coutdown --> */}
      <div className="flex-c-m bg-img1 size2 where1 overlay1 where2 respon2">
        <div className="wsize2 flex-w flex-c-m cd100 js-tilt">
          <div className="flex-col-c-m size6 bor2 m-l-10 m-r-10 m-t-15">
            <span className="l2-txt1 p-b-9 days">35</span>
            <span className="s2-txt4">Days</span>
          </div>

          <div className="flex-col-c-m size6 bor2 m-l-10 m-r-10 m-t-15">
            <span className="l2-txt1 p-b-9 hours">17</span>
            <span className="s2-txt4">Hours</span>
          </div>

          <div className="flex-col-c-m size6 bor2 m-l-10 m-r-10 m-t-15">
            <span className="l2-txt1 p-b-9 minutes">50</span>
            <span className="s2-txt4">Minutes</span>
          </div>

          <div className="flex-col-c-m size6 bor2 m-l-10 m-r-10 m-t-15">
            <span className="l2-txt1 p-b-9 seconds">39</span>
            <span className="s2-txt4">Seconds</span>
          </div>
        </div>
      </div>

      {/* Form */}
      <div className="size3 flex-col-sb flex-w respon1">
        <div className="p-t-250">
          <p className="m1-txt1 p-b-36">Che Leave Management System</p>
          {isSignIn ? <SignIn /> : <SignUp />}

          {isSignIn ? (
            <p className="s2-txt3 p-t-18">
              Don't have account?{" "}
              <Link to="#" onClick={handleLogin}>
                Sign Up!
              </Link>
            </p>
          ) : (
            <p className="s2-txt3 p-t-18">
              Already have account?{" "}
              <Link to="#" onClick={handleLogin}>
                Sign In!
              </Link>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Login;
