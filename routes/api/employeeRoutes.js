var db = require("../../models");
const router = require("express").Router();

router.post("/employee/", function (req, res) {
  console.log("In Post Route");
  db.Employee.create({
    firstName: req.body.employee_firstName,
    lastName: req.body.employee_lastName,
    middleName: req.body.employee_middleName,
    dateOfInjury: req.body.employee_dateOfInjury,
    dateOfBirth: req.body.employee_dateOfBirth,
    claimNumber: req.body.employee_claimNumber,
    employer: req.body.employee_employer,
  }).then(function (employeePost) {
    res.json(employeePost);
  });
});

module.exports = router;
