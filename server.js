require("dotenv").config();
const express = require("express");
const cors = require("cors"); //
const app = express();
const port = process.env.PORT;
const employeeRouter = require("./server/api/employee/employee.router");
const leaveRouter = require("./server/api/leave/leave.router");

app.use(cors()); //middle ware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/api/employee", employeeRouter);
app.use("/api/leave", leaveRouter);

app.listen(port, () => console.log(`Listening at http://localhost:${port}`));
