var db = require("../../models");
const router = require("express").Router();

router.get("/", function (req, res) {
  db.Requirements.findAll({}).then(function (treatmentOptions) {
    res.json(treatmentOptions);
  });
});

router.get("/:treatmentId", function (req, res) {
  db.Requirements.findAll({
    where: {
      treatmentId: req.params.treatmentId
    }}).then(function (requirements) {
    res.json(requirements);
  });
});


module.exports = router;