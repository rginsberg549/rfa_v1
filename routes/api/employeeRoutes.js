var db = require("../../models");
const router = require("express").Router();

router.post("/", function (req, res) {
  db.Employee.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    middleName: req.body.middleName,
    dateOfInjury: req.body.dateOfInjury,
    dateOfBirth: req.body.dateOfBirth,
    claimNumber: req.body.claimNumber,
    employer: req.body.employer,
  }).then(function (employeePost) {
    res.json(employeePost);
  });
});

module.exports = router;
