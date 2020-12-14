var db = require("../../models");
const router = require("express").Router();
const axios = require("axios");

var DocSpring = require("docspring");
var config = new DocSpring.Configuration();
config.apiTokenId = "api_test_LkEn6pDm4qNyQNjphS";
config.apiTokenSecret = "ELxPagSTSqmyxeyqcbtZLTm3PGbQy2fgbhYX5NHyXg";

function getPDFURL(data, dbIDs) {
    console.log(data);
  var client = new DocSpring.Client(config);
  var template_id = "tpl_JmKeMrtxHxYyN6dN6H";
  var submission_data = {
    editable: false,
    data: {
      fullName: data.employee.lastName + ", " + data.employee.firstName + ", " + data.employee.middleName,
      dateOfInjury: data.employee.dateOfInjury,
      dateOfBirth: data.employee.dateOfBirth,
      claimNumber: data.employee.claimNumber,
      employer: data.employee.employer,
      physicianFullName: data.physician.physicianName,
      practiceName: data.physician.practiceName,
      physicianContactName: data.physician.contactName,
      physicianAddress: data.physician.address,
      physicianCity: data.physician.city,
      physicianState: data.physician.state,
      physicianZipcode: data.physician.zipCode,
      physicianPhoneNumber: data.physician.phoneNumber,
      physicianFaxNumber: data.physician.faxNumber,
      specialty: data.physician.specialty,
      npiNumber: data.physician.npiNumber,
      physicianEmailAddress: data.physician.emailAddress,
      companyName: data.claimsAdmin.companyName,
      claimsAdminContactName: data.claimsAdmin.contactName,
      claimsAdminAddress: data.claimsAdmin.address,
      claimsAdminCity: data.claimsAdmin.city,
      claimsAdminState: data.claimsAdmin.state,
      claimsAdminZipcode: data.claimsAdmin.zipCode,
      claimsAdminPhone: data.claimsAdmin.phoneNumber,
      claimsAdminFax: data.claimsAdmin.faxNumber,
      claimsAdminEmail: data.claimsAdmin.emailAddress,
      diagnosis1: data.treatmentRowData[0].diagnosisName,
      diagnosis2: "",
      diagnosis3: "",
      diagnosis4: "",
      diagnosis5: "",
      treatment1: data.treatmentRowData[0].treatmentName,
      treatment2:"",
      treatment3:"",
      treatment4:"",
      treatment5:"",
      notes1: data.treatmentRowData[0].note,
      notes2:"",
      notes3:"",
      notes4:"",
      notes5:"",
    },
  };
  return new Promise(function (resolve, reject) {
    client.generatePDF(
      template_id,
      submission_data,
      async function (error, response) {
        if (error) {
          reject(error);
        }
        var submission = await response.submission;
        console.log(submission);
        db.Form.create({
          requestType: data.requestType,
          treatmentRowData: data.treatmentRowData,
          status: "Pending",
          pdfURL: submission.download_url,
          EmployeeId: dbIDs.employeeId,
          PhysicianId: dbIDs.physicianId,
          ClaimsAdminId: dbIDs.claimsAdminId,
        }).then(() => resolve());
      }
    );
  });
}

function createmployeeDetailsFromRequest(req) {
  let empPromise = db.Employee.create({
    firstName: req.body.employee.firstName,
    lastName: req.body.employee.lastName,
    middleName: req.body.employee.middleName,
    dateOfInjury: req.body.employee.dateOfInjury,
    dateOfBirth: req.body.employee.dateOfBirth,
    claimNumber: req.body.employee.claimNumber,
    employer: req.body.employee.employer,
  });

  let physicianPromise = db.Physician.create({
    physicianName: req.body.physician.physicianName,
    practiceName: req.body.physician.practiceName,
    contactName: req.body.physician.contactName,
    address: req.body.physician.address,
    city: req.body.physician.city,
    state: req.body.physician.state,
    zipCode: req.body.physician.zipCode,
    phoneNumber: req.body.physician.phoneNumber,
    faxNumber: req.body.physician.faxNumber,
    emailAddress: req.body.physician.emailAddress,
    specialty: req.body.physician.specialty,
    npiNumber: req.body.physician.npiNumber,
  });

  let claimAdminPromise = db.ClaimsAdmins.create({
    companyName: req.body.claimsAdmin.companyName,
    contactName: req.body.claimsAdmin.contactName,
    address: req.body.claimsAdmin.address,
    city: req.body.claimsAdmin.city,
    state: req.body.claimsAdmin.state,
    zipCode: req.body.claimsAdmin.zipCode,
    phoneNumber: req.body.claimsAdmin.phoneNumber,
    faxNumber: req.body.claimsAdmin.faxNumber,
    emailAddress: req.body.claimsAdmin.emailAddress,
  });

  return Promise.all([empPromise, physicianPromise, claimAdminPromise]).then(
    (values) => {
      dbIds = {
        employeeId: values[0].dataValues.id,
        physicianId: values[1].dataValues.id,
        claimsAdminId: values[2].dataValues.id,
      };
      return getPDFURL(req.body, dbIds);
    }
  );
}

router.post("/", function (req, res) {
  let dbIDs = {};

  createmployeeDetailsFromRequest(req)
    .then(() => {
      res.json("Success");
    })
    .catch((err) => {
      console.log("error", err);
      res.json(error);
    });
});

router.get("/", function (req, res) {
  db.Form.findAll({
    include: [db.Employee, db.Physician, db.ClaimsAdmins],
  }).then(function (forms) {
    console.log(forms);
    res.json(forms);
  });
});

module.exports = router;
