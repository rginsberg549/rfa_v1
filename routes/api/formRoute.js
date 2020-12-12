var db = require("../../models");
const router = require("express").Router();


router.post("/", function (req, res) {
    console.log(req.body)

    let dbIDs = {};

    db.Employee.create({ 
            firstName: req.body.employee.firstName,
            lastName: req.body.employee.lastName,
            middleName: req.body.employee.middleName,
            dateOfInjury: req.body.employee.dateOfInjury,
            dateOfBirth: req.body.employee.dateOfBirth,
            claimNumber: req.body.employee.claimNumber,
            employer: req.body.employee. employer,  
    })
    
    .then((employeeResponse) => {
        dbIDs.employeeId = employeeResponse.dataValues.id;

        return db.Physicians.create({
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
                npiNumber: req.body.physician.npiNumber
            })
    })

    .then((physicianResponse) => {
        console.log("Hello again");

        dbIDs.physicianId = physicianResponse.dataValues.id

        return db.ClaimsAdmins.create({
            companyName: req.body.claimsAdmin.companyName,
            contactName: req.body.claimsAdmin.contactName,
            address: req.body.claimsAdmin.address,
            city: req.body.claimsAdmin.city,
            state: req.body.claimsAdmin.state,
            zipCode: req.body.claimsAdmin.zipCode,
            phoneNumber: req.body.claimsAdmin.phoneNumber,
            faxNumber: req.body.claimsAdmin.faxNumber,
            emailAddress: req.body.claimsAdmin.emailAddress,   
        })
    })

    .then((claimsAdminResponse) => {

        dbIDs.claimsAdminId = claimsAdminResponse.dataValues.id
        
        db.Form.create({
            requestType: req.body.requestType,
            treatmentRowData: req.body.treatmentRowData,
            status: "Pending",
            pdfURL: "",
            EmployeeId: dbIDs.employeeId,
            PhysicianId: dbIDs.physicianId,
            ClaimsAdminId: dbIDs.claimsAdminId,
        })
    }).then(()=> {
        res.json("Success");
    })
    
    .catch((error) => {
            res.json(error);
    })
})


router.get("/", function(req, res) {
    db.Form.findAll({
        include: db.Employee
    }).then(function(forms) {
        console.log(forms);
        res.json(forms);
    });
  });


module.exports = router;