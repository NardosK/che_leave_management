import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Logo from "../../logo.png";
import LeaveList from "../LeaveList/LeaveList";

function LeaveRequest() {
  const navigate = useNavigate();
  const [requests, setRequests] = useState([]);
  const [form, setForm] = useState({
    leaveType: null,
    balance: 0,
    quantity: 1,
    startDate: null,
    endDate: null,
  });
  const [balance, setBalance] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [endDate, setEndDate] = useState(Date.now);
  const handleChange = async (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });

    switch (e.target.name) {
      case "leaveType":
        setBalance(14);
        break;
      case "quantity":
        setQuantity(e.target.value);
        break;
      case "startDate":
        const startDate = e.target.value;
        setEndDate(startDate + quantity);
        break;
      default:
        break;
    }
  };

  const handleSubmit = async () => {};

  return (
    <div className="size33 respon3 p-t-10">
      <div className="w-35">
        <p className="m1-txt1 p-b-36">Leave Request Form</p>
        <form
          name="requestForm"
          className="contact100-form validate-form"
          href="/"
          method="POST"
          onSubmit={handleSubmit}
        >
          <div
            className="wrap-input100 m-b-10 validate-input"
            data-validate="Leave Type is required"
          >
            <select
              className="s2-txt1 placeholder0 input100"
              name="leaveType"
              defaultValue={""}
              placeholder={"Select Leave Type"}
              onChange={handleChange}
            >
              <option value={"annual leave"}>Annual Leave</option>
              <option value={"sick leave"}>Sick Leave</option>
              <option value={"parental leave"}>Parental Leave</option>
            </select>
            <span className="focus-input100"></span>
          </div>
          <div className="wrap-input100 m-b-10 validate-input">
            <input
              className="s2-txt1 placeholder0 input100"
              type="number"
              name="balance"
              placeholder={0}
              value={balance}
              disabled
            />
            <span className="focus-input100"></span>
          </div>
          <div
            className="wrap-input100 m-b-10 validate-input"
            data-validate="Quantity is required"
          >
            <input
              className="s2-txt1 placeholder0 input100"
              type="number"
              name="quantity"
              value={quantity}
              placeholder="No. of Days"
              onChange={handleChange}
            />
            <span className="focus-input100"></span>
          </div>
          <div
            className="wrap-input100 m-b-10 validate-input"
            data-validate="Start Date is required"
          >
            <input
              className="s2-txt1 placeholder0 input100"
              type="date"
              name="startDate"
              placeholder="Start Date"
              onChange={handleChange}
            />
            <span className="focus-input100"></span>
          </div>
          <div
            className="wrap-input100 m-b-20 validate-input"
            data-validate="End Date is required"
          >
            <input
              className="s2-txt1 placeholder0 input100"
              type="date"
              name="endDate"
              placeholder={endDate}
              value={endDate}
              disabled
            />
            <span className="focus-input100"></span>
          </div>
          <div className="w-full">
            <button
              className="flex-c-m s2-txt2 size4 bg1 bor1 hov1 trans-04"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </form>
      </div>

      <div className="w-60">
        <p className="m1-txt1 p-b-36">Leave Request List</p>
        <div>
          <LeaveList />
        </div>
      </div>
    </div>
  );
}

export default LeaveRequest;
