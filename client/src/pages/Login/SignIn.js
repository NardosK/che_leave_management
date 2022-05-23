import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import Axios from "../../Axios";

function SignIn() {
  // const axios = Axios();
  const navigate = useNavigate();
  const [form, setForm] = useState({});

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     //sending user data to database to be logged in
  //     const loginRes = await axios.post("/api/users/login", {
  //       email: form.email,
  //       password: form.password,
  //     });

  //     //update global state with response from backend(user-info)
  //     setUserData({
  //       token: loginRes.data.token,
  //       user: loginRes.data.user,
  //       config: {
  //         headers: { "x-auth-token": loginRes.data.token },
  //       },
  //     });

  //     //set localStorage with the token
  //     localStorage.setItem("auth-token", loginRes.data.token);

  //     //navigate user to homepage
  //     navigate("/leave");
  //   } catch (err) {
  //     console.log("Error :" + err.response.data.msg);
  //     alert("Error :" + err.response.data.msg);
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    navigate("/leave");
  };

  return (
    <div>
      <form className="contact100-form validate-form">
        <div
          className="wrap-input100 m-b-10 validate-input"
          data-validate="Name is required"
        >
          <input
            className="s2-txt1 placeholder0 input100"
            type="text"
            name="name"
            placeholder="Your Name"
          />
          <span className="focus-input100"></span>
        </div>

        <div
          className="wrap-input100 m-b-20 validate-input"
          data-validate="Email is required: ex@abc.xyz"
        >
          <input
            className="s2-txt1 placeholder0 input100"
            type="text"
            name="email"
            placeholder="Email Address"
          />
          <span className="focus-input100"></span>
        </div>

        <div className="w-full">
          <button
            className="flex-c-m s2-txt2 size4 bg1 bor1 hov1 trans-04"
            onClick={handleSubmit}
          >
            Sign In
          </button>
        </div>
      </form>
    </div>
  );
}

export default SignIn;
