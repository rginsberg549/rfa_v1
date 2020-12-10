var db = require("../../models");
const router = require("express").Router();

router.get("/", function(req, res) {
    db.Diagnoses.findAll({}).then(function(diagnosesOptions) {
      res.json(diagnosesOptions);
    });
  });

module.exports = router;