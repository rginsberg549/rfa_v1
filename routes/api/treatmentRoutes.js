var db = require("../../models");
const router = require("express").Router();

router.get("/", function (req, res) {
  db.Treatments.findAll({}).then(function (treatmentOptions) {
    res.json(treatmentOptions);
  });
});

router.get("/:diagnosisCode", function (req, res) {
  db.Treatments.findAll({
    where: {
      diagnosisCode: req.params.diagnosisCode
    }}).then(function (treatmentOptions) {
    res.json(treatmentOptions);
  });
});


module.exports = router;
