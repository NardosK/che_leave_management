import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Axios from "../../Axios";
import LeaveList from "../LeaveList/LeaveList";
import { UserContext } from "../../context/UserContext";
import leaveBalance from "../../json/LeaveBalance.json";

function LeaveRequest() {
  const [userData, setUserData] = useContext(UserContext);
  const navigate = useNavigate();
  const axios = Axios();
  const [requests, setRequests] = useState([]);
  const [form, setForm] = useState({
    leaveType: null,
    balance: 0,
    quantity: 1,
    startDate: null,
    endDate: null,
  });
  const [balance, setBalance] = useState(0);
  const [endDate, setEndDate] = useState("");
  const handleChange = async (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const loginRes = await axios.post("/api/leave/newLeave", {
        emp_id: userData[0].id,
        leaveType: form.leaveType,
        balance: balance,
        quantity: form.quantity,
        startDate: form.startDate,
        endDate: form.endDate,
      });

      // setRequests((requests) => [
      //   ...requests,
      //   {
      //     emp_id: userData[0].id,
      //     fullName: userData[0].fullName,
      //     leaveType: form.leaveType,
      //     quantity: form.quantity,
      //     startDate: form.startDate,
      //     endDate: form.endDate,
      //     dateCreated: new Date(),
      //     status: "Pending",
      //   },
      // ]);
      loadRequests();
      // e.target.reset();
    } catch (err) {
      console.log(err);
      alert("Error : " + err.response.data.msg);
    }
  };

  useEffect(() => {
    var totalBalance = leaveBalance.find(
      (p) => p.name === form.leaveType
    )?.balance;
    if (!totalBalance) totalBalance = 0;
    var used = 0;
    requests.map((elem) => {
      if (elem.emp_id === userData[0].id && elem.status !== "Rejected")
        used += parseInt(elem.quantity);
    });
    setBalance(totalBalance - used);
  }, [form.leaveType]);

  useEffect(() => {
    setEndDate(addDays(form.startDate, form.quantity));
    setForm({ ...form, endDate });
  }, [form.startDate, form.quantity]);

  useEffect(() => {
    if (!userData[0]) {
      navigate("/login");
    } else {
      loadRequests();
    }
  }, [userData[0]]);

  async function loadRequests() {
    setRequests([]);
    if (userData[0]) {
      if (userData[0].role === "HR Manager") {
        const response1 = await axios.get("/api/leave/getLeaveRequests");
        setRequests(response1.data?.data);
      } else {
        const response2 = await axios.get(
          `/api/leave/getLeaveByEmpID?emp_id=${userData[0].id}`
        );
        setRequests(response2.data?.data);
      }
    }
  }
  function addDays(date, days) {
    if (!days) days = 0;
    const thisDate = new Date(date);
    thisDate.setDate(thisDate.getDate() + parseInt(days));
    return thisDate.toLocaleDateString();
  }

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
              defaultValue={"Annual Leave"}
              placeholder={"Select Leave Type"}
              onChange={handleChange}
            >
              {leaveBalance.map((value, index) => {
                return (
                  <option key={index} value={value.name}>
                    {value.name}
                  </option>
                );
              })}
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
              type="text"
              name="endDate"
              placeholder="End Date"
              value={endDate}
              onChange={handleChange}
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
        <div className="p-b-40">
          <LeaveList leaveReqList={requests} />
        </div>
        <button
          className="flex-c-m s2-txt2 size4 bg1 bor1 hov1 trans-04"
          onClick={loadRequests}
        >
          Refresh
        </button>
      </div>
    </div>
  );
}

export default LeaveRequest;
