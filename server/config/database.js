const mysql = require("mysql");
const employees = require("./mock-data.json");

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.MYSQL_DB,
  connectionLimit: 10,
});

let employee = `CREATE TABLE if not exists Employee(
    id int auto_increment,
    fullName varchar(255) not null,
    gender varchar(255) not null,
    employmentDate varchar(255) not null,
    role varchar(255) not null,
    PRIMARY KEY (id),
    UNIQUE KEY (fullName)
    )`;
let leaveType = `CREATE TABLE if not exists LeaveType(
      id int auto_increment,
      name varchar(255) not null,
      value int not null,
      PRIMARY KEY (id),
      UNIQUE KEY (name)
      )`;
let leaveRequest = `CREATE TABLE if not exists LeaveRequest(
    id int auto_increment,
    emp_id int not null,
    leaveType varchar(255) not null,
    quantity int not null,
    startDate date not null,     
    endDate date not null,
    dateCreated date not null,
    status varchar(255) not null,
    approvedBy int null,                
    PRIMARY KEY (id),
    FOREIGN KEY (emp_id) REFERENCES Employee(id),
    FOREIGN KEY (approvedBy) REFERENCES Employee(id)
)`;

pool.query(employee, (err, results) => {
  if (err) throw err;
  console.log("Employee table created");
});
pool.query(leaveType, (err, results) => {
  if (err) throw err;
  console.log("Leave Type table created");
});
pool.query(leaveRequest, (err, results) => {
  if (err) throw err;
  console.log("Leave Request table created");
});

employees.map((emp) => {
  return pool.query();
});

module.exports = pool;
