import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "../../Axios";
import { UserContext } from "../../context/UserContext";

function SignIn() {
  const [userData, setUserData] = useContext(UserContext);
  const axios = Axios();
  const navigate = useNavigate();
  const [form, setForm] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const loginRes = await axios.post("/api/employee/login", {
        userId: form.userId,
        password: form.password,
      });

      setUserData(loginRes.data.user);

      navigate("/leave");
    } catch (err) {
      alert("Error :" + err.response.data.msg);
    }
  };

  return (
    <div>
      <form id="loginForm" className="contact100-form validate-form">
        <div
          className="wrap-input100 m-b-10 validate-input"
          data-validate="Name is required"
        >
          <input
            className="s2-txt1 placeholder0 input100"
            type="text"
            name="userId"
            placeholder="User ID"
            onChange={handleChange}
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
            name="password"
            placeholder="Password"
            onChange={handleChange}
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
