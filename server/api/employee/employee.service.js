const pool = require("../../config/database");

module.exports = {
  newEmployee: (data, callback) => {
    pool.query(
      `INSERT INTO LeaveRequest(emp_id, leaveType, quantity,startDate, endDate,dateCreated,status,approvedBy)VALUES(?,?,?,?)`,
      [
        data.id,
        data.body.leaveType,
        data.body.quantity,
        data.body.startDate,
        date.body.endDate,
        new Date(),
        data.body.status,
        data.body.approvedBy,
      ],
      (err, result) => {
        if (err) {
          return callback(err);
        }
        return callback(null, result);
      }
    );
  },
  updateEmployee: (data, callback) => {
    pool.query(
      `INSERT INTO LeaveRequest(emp_id, leaveType, quantity,startDate, endDate,dateCreated,status,approvedBy)VALUES(?,?,?,?)`,
      [
        data.id,
        data.body.leaveType,
        data.body.quantity,
        data.body.startDate,
        date.body.endDate,
        new Date(),
        data.body.status,
        data.body.approvedBy,
      ],
      (err, result) => {
        if (err) {
          return callback(err);
        }
        return callback(null, result);
      }
    );
  },
  getEmployees: (callback) => {
    pool.query(`SELECT * FROM Employee`, (err, result) => {
      if (err) {
        return callback(err);
      }
      return callback(null, result);
    });
  },
  getEmployeeByID: (id, callback) => {
    pool.query(`SELECT * FROM Employee WHERE id = ?`, [id], (err, result) => {
      if (err) {
        return callback(err);
      }
      return callback(null, result);
    });
  },
};
