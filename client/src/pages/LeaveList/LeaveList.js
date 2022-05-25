import React, { useState, useContext, useEffect } from "react";
import "./Leave.css";
import Table from "./Table";
import Axios from "../../Axios";
import { UserContext } from "../../context/UserContext";

function LeaveList({ leaveReqList }) {
  const [userData, setUserData] = useContext(UserContext);
  const axios = Axios();
  const [columns, setColumns] = useState([]);
  const columns1 = [
    {
      Header: "Name",
      accessor: "fullName",
    },
    {
      Header: "Leave Type",
      accessor: "leaveType",
    },
    {
      Header: "No. of Days",
      accessor: "quantity",
    },
    {
      Header: "From",
      accessor: "startDate",
    },
    {
      Header: "Until",
      accessor: "endDate",
    },
    {
      Header: "Requested Date",
      accessor: "dateCreated",
    },
    {
      Header: "Status",
      accessor: "status",
    },
    {
      Header: "By",
      accessor: "approvedByName",
    },
    {
      Header: "Action",
      accessor: "action",
      Cell: (row) => (
        <div style={{ justifyContent: "center" }}>
          <div>
            <button
              className="m-b-10 m-l-10 p-l-10 p-r-10"
              style={{ backgroundColor: "red", color: "white" }}
              onClick={(e) => {
                e.preventDefault();
                handleButton(row.row.original, "Rejected");
              }}
            >
              Reject
            </button>
          </div>
          <div>
            <button
              className="m-l-10 p-l-10 p-r-10"
              style={{ color: "white", backgroundColor: "green" }}
              onClick={(e) => {
                e.preventDefault();
                handleButton(row.row.original, "Approved");
              }}
            >
              Approve
            </button>
          </div>
        </div>
      ),
    },
  ];

  const columns2 = [
    {
      Header: "Name",
      accessor: "fullName",
    },
    {
      Header: "Leave Type",
      accessor: "leaveType",
    },
    {
      Header: "No. of Days",
      accessor: "quantity",
    },
    {
      Header: "From",
      accessor: "startDate",
    },
    {
      Header: "Until",
      accessor: "endDate",
    },
    {
      Header: "Requested Date",
      accessor: "dateCreated",
    },
    {
      Header: "Status",
      accessor: "status",
    },
    {
      Header: "By",
      accessor: "approvedByName",
    },
  ];

  const handleButton = async (row, status) => {
    try {
      row.status = status;
      row.approvedBy = userData[0].id;
      const loginRes = await axios.post("/api/leave/updateLeave", row);
      if (loginRes) {
        leaveReqList.find((p) => p.id === row.id).status = status;
        leaveReqList.find((p) => p.id === row.id).approvedByName =
          userData[0].fullName;
      }
    } catch (err) {
      alert("Error :" + err.response.data.msg);
    }
  };

  useEffect(() => {
    setColumns(() => {
      return userData[0]?.role === "HR Manager" ? columns1 : columns2;
    });
  }, [userData[0]]);

  return (
    <div className="tableWrap">
      <Table columns={columns} data={leaveReqList} />
    </div>
  );
}

export default LeaveList;
