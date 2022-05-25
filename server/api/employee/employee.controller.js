const {
  newEmployee,
  updateEmployee,
  getEmployees,
  getEmployeeByID,
} = require("./employee.service");

module.exports = {
  newEmployee: (req, res) => {
    const { question_id, answer } = req.body;
    if (!question_id || !answer)
      return res
        .status(400)
        .json({ msg: "Not all fields have been provided!" });

    newEmployee(req, (err, results) => {
      if (err) {
        return res.status(500).json({ msg: "database connection err" });
      }
      return res.status(200).json({
        msg: "New Leave Request added successfully",
        data: results,
      });
    });
  },
  updateEmployee: (req, res) => {
    const { question_id, answer } = req.body;
    if (!question_id || !answer)
      return res
        .status(400)
        .json({ msg: "Not all fields have been provided!" });

    updateEmployee(req, (err, results) => {
      if (err) {
        return res.status(500).json({ msg: "database connection err" });
      }
      return res.status(200).json({
        msg: "Leave Request updated successfully",
        data: results,
      });
    });
  },
  getEmployees: (res) => {
    getEmployees((err, results) => {
      if (err) {
        return res.status(500).json({ msg: "database connection err" });
      }
      if (!results) {
        return res.status(404).json({ msg: "Record not found" });
      }
      return res.status(200).json({ data: results });
    });
  },
  getEmployeeByID: (req, res) => {
    getEmployeeByID(req.query.id, (err, results) => {
      if (err) {
        return res.status(500).json({ msg: "database connection err" });
      }
      if (!results) {
        return res.status(404).json({ msg: "Record not found" });
      }
      return res.status(200).json({ data: results });
    });
  },
  login: (req, res) => {
    //destructuring req.body
    const { userId, password } = req.body;

    //validation
    if (!userId)
      return res
        .status(400)
        .json({ msg: "Not all required fields have been provided!" });

    //sending data to check if user id exist on our database
    getEmployeeByID(userId, (err, results) => {
      if (err) {
        res.status(500).json({ msg: "database connection err" });
      }
      if (!results) {
        return res
          .status(404)
          .json({ msg: "No account with this id has been registered" });
      }
      return res.json({
        user: results,
      });
    });
  },
};
