const pool = require("../../config/database");

module.exports = {
  newLeave: (data, callback) => {
    pool.query(
      `INSERT INTO LeaveRequest(emp_id, leaveType, quantity,startDate, endDate, dateCreated, status)VALUES(?,?,?,?,?,?,?)`,
      [
        data.emp_id,
        data.leaveType,
        data.quantity,
        data.startDate,
        data.endDate,
        new Date(),
        "Pending",
      ],
      (err, result) => {
        if (err) {
          return callback(err);
        }
        return callback(null, result);
      }
    );
  },
  updateLeave: (data, callback) => {
    // var sql = `UPDATE LeaveRequest SET emp_id = ${data.emp_id},  SET leaveType = ${data.leaveType},  SET quantity = ${data.quantity},  SET startDate = ${data.startDate},  SET endDate = ${data.endDate},  SET status = ${data.status}, SET approvedBy = ${data.approvedBy} WHERE id = ${data.id}`;

    // sql = `UPDATE LeaveRequest SET status = '${data.status}', SET approvedBy = ${data.approvedBy} WHERE id = ${data.id}`;
    var sql = `UPDATE LeaveRequest SET status = ?, approvedBy = ? WHERE id = ?`;
    var sqlParams = [data.status, data.approvedBy, data.id];
    pool.query(sql, sqlParams, (err, result) => {
      if (err) {
        return callback(err);
      }
      return callback(null, result);
    });
  },
  getLeaveRequests: (callback) => {
    pool.query(
      `SELECT LeaveRequest.id, LeaveRequest.emp_id, Employee.fullName, Employee.gender, Employee.role, LeaveRequest.leaveType, LeaveRequest.quantity, DATE_FORMAT(LeaveRequest.startDate, "%m-%d-%Y") as startDate, DATE_FORMAT(LeaveRequest.endDate, "%m-%d-%Y") as endDate, DATE_FORMAT(LeaveRequest.dateCreated, "%m-%d-%Y") as dateCreated, LeaveRequest.status, LeaveRequest.approvedBy, Employee1.fullName as approvedByName FROM LeaveRequest LEFT OUTER JOIN Employee ON Employee.id = LeaveRequest.emp_id LEFT OUTER JOIN Employee as Employee1 ON Employee1.id= LeaveRequest.approvedBy order by LeaveRequest.dateCreated desc`,
      (err, result) => {
        if (err) {
          return callback(err);
        }
        return callback(null, result);
      }
    );
  },
  getLeaveByEmpID: (emp_id, callback) => {
    pool.query(
      `SELECT LeaveRequest.id, LeaveRequest.emp_id, Employee.fullName, Employee.gender, Employee.role, LeaveRequest.leaveType, LeaveRequest.quantity, DATE_FORMAT(LeaveRequest.startDate, "%m-%d-%Y") as startDate, DATE_FORMAT(LeaveRequest.endDate, "%m-%d-%Y") as endDate, DATE_FORMAT(LeaveRequest.dateCreated, "%m-%d-%Y") as dateCreated, LeaveRequest.status, LeaveRequest.approvedBy, Employee1.fullName as approvedByName FROM LeaveRequest LEFT OUTER JOIN Employee ON Employee.id = LeaveRequest.emp_id LEFT OUTER JOIN Employee as Employee1 ON Employee1.id= LeaveRequest.approvedBy WHERE LeaveRequest.emp_id = ?`,
      [emp_id],
      (err, result) => {
        if (err) {
          return callback(err);
        }
        return callback(null, result);
      }
    );
  },
};
