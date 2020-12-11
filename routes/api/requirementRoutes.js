var db = require("../../models");
const router = require("express").Router();

router.get("/", function (req, res) {
  db.Requirements.findAll({}).then(function (treatmentOptions) {
    res.json(treatmentOptions);
  });
});

router.get("/:diagnosisCode/:treatmentId", function (req, res) {
  db.Requirements.findAll({
    where: {
      diagnosisCode: req.params.diagnosisCode,
      treatmentId: req.params.treatmentId
    }}).then(function (requirements) {
    res.json(requirements);
  });
});


module.exports = router;