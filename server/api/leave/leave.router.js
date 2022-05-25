const router = require("express").Router();

const {
  newLeave,
  updateLeave,
  getLeaveRequests,
  getLeaveByEmpID,
} = require("./leave.controller");

router.post("/newLeave", newLeave);

router.post("/updateLeave", updateLeave);

router.get("/getLeaveRequests", getLeaveRequests);

router.get("/getLeaveByEmpID", getLeaveByEmpID);

module.exports = router;
