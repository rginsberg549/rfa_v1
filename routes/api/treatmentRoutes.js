var db = require("../../models");
const router = require("express").Router();

router.get("/", function (req, res) {
  db.Treatments.findAll({}).then(function (treatmentOptions) {
    res.json(treatmentOptions);
  });
});

router.get("/:diagnosisId", function (req, res) {
  db.Treatments.findAll({
    where: {
      diagnosisId: req.params.diagnosisId
    }}).then(function (treatmentOptions) {
    res.json(treatmentOptions);
  });
});


module.exports = router;
