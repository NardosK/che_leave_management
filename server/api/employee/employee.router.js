const router = require("express").Router();

const {
  newEmployee,
  updateEmployee,
  getEmployees,
  getEmployeeByID,
  login,
} = require("./employee.controller");

router.post("/newEmployee", newEmployee);

router.post("/updateEmployee", updateEmployee);

router.get("/getEmployees", getEmployees);

router.get("/getEmployeeByID", getEmployeeByID);

router.post("/login", login);

module.exports = router;
