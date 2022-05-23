import React from "react";

function SignUp() {
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
            placeholder="Full Name"
          />
          <span className="focus-input100"></span>
        </div>

        <div
          className="wrap-input100 m-b-10 validate-input"
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

        <div className="btn-group wrap-input100 m-b-10 validate-input w-64">
          <button
            type="button"
            class="btn btn-secondary dropdown-toggle"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Select Role
          </button>
          <div class="dropdown-menu dropdown-menu-right">
            <button class="dropdown-item" type="button">
              Employee
            </button>
            <button class="dropdown-item" type="button">
              HR Manager
            </button>
          </div>
          <span className="focus-input100"></span>
        </div>

        <div
          className="wrap-input100 m-b-20 validate-input"
          data-validate="Gender is required"
        >
          <input
            className="s2-txt1 placeholder0 input100"
            type="text"
            name="gender"
            placeholder="Gender"
          />
          <span className="focus-input100"></span>
        </div>

        <div className="w-full">
          <button className="flex-c-m s2-txt2 size4 bg1 bor1 hov1 trans-04">
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
