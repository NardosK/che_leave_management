const {
  newLeave,
  updateLeave,
  getLeaveRequests,
  getLeaveByEmpID,
} = require("./leave.service");

module.exports = {
  newLeave: (req, res) => {
    const { emp_id, leaveType, balance, quantity, startDate, endDate } =
      req.body;
    if (!emp_id || !leaveType || !quantity || !startDate || !endDate)
      return res
        .status(400)
        .json({ msg: "Not all fields have been provided!" });
    if (balance < quantity)
      return res.status(400).json({ msg: "You have no enough leave balance!" });

    newLeave(req.body, (err, results) => {
      if (err) {
        return res.status(500).json({ msg: "database connection err" });
      }
      return res.status(200).json({ data: results });
    });
  },
  updateLeave: (req, res) => {
    const {
      id,
      emp_id,
      leaveType,
      quantity,
      startDate,
      endDate,
      status,
      approvedBy,
    } = req.body;
    if (
      !id ||
      !emp_id ||
      !leaveType ||
      !quantity ||
      !startDate ||
      !endDate ||
      !status ||
      !approvedBy
    )
      return res
        .status(400)
        .json({ msg: "Not all fields have been provided!" });

    updateLeave(req.body, (err, results) => {
      if (err) {
        return res.status(500).json({ msg: "database connection err" });
      }
      return res.status(200).json({ data: results });
    });
  },
  getLeaveRequests: (req, res) => {
    getLeaveRequests((err, results) => {
      if (err) {
        return res.status(500).json({ msg: "database connection err" });
      }
      if (!results) {
        return res.status(404).json({ msg: "Record not found" });
      }
      return res.status(200).json({ data: results });
    });
  },
  getLeaveByEmpID: (req, res) => {
    getLeaveByEmpID(req.query.emp_id, (err, results) => {
      if (err) {
        return res.status(500).json({ msg: "database connection err" });
      }
      if (!results) {
        return res.status(404).json({ msg: "Record not found" });
      }
      return res.status(200).json({ data: results });
    });
  },
};
