var db = require("../../models");
const router = require("express").Router();

router.post("/", function (req, res) {
  db.ClaimsAdmin.create({
      name: req.body.name,
      practiceName: req.body.practiceName,
      contactName: req.body.contactName,
      address: req.body.address,
      city: req.body.city,
      state: req.body.state,
      zipCode: req.body.zipCode,
      phoneNumber: req.body.phoneNumber,
      faxNumber: req.body.faxNumber,
      emailAddress: req.body.emailAddress,
      specialty: req.body.specialty,
      npiNumber: req.body.npiNumber,
      
  }).then(function (claimsAdminPost) {
    res.json(claimsAdminPost);
  });
});

module.exports = router;