import React from "react";
import "./Leave.css";
import Table from "./Table";

const data = [
  {
    name: "Ayaan",
    age: 26,
  },
  {
    name: "Ahana",
    age: 22,
  },
  {
    name: "Peter",
    age: 40,
  },
  {
    name: "Virat",
    age: 30,
  },
  {
    name: "Rohit",
    age: 32,
  },
  {
    name: "Dhoni",
    age: 37,
  },
];
const columns = [
  {
    Header: "Name",
    accessor: "name",
  },
  {
    Header: "Age",
    accessor: "age",
  },
  {
    Header: "Action",
    accessor: "action",
  },
];
function LeaveList() {
  return (
    <div className="tableWrap">
      <div className="p-b-40">
        <Table columns={columns} data={data} />
      </div>
      <button className="flex-c-m s2-txt2 size4 bg1 bor1 hov1 trans-04">
        Refresh
      </button>
    </div>
  );
}

export default LeaveList;
