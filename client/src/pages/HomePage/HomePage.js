import React from "react";
import LeaveList from "../LeaveList/LeaveList";
import LeaveRequest from "../LeaveRequest/LeaveRequest";

function HomePage() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        height: "100%",
        width: "100%",
      }}
    >
      <div style={{ width: "40%" }}>
        <LeaveRequest />
      </div>
      <div style={{ width: "60%" }}>
        <LeaveList />
      </div>
    </div>
  );
}

export default HomePage;
