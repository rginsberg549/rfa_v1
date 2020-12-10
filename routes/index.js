const router = require("express").Router();
const employeeRoute = require("./api/employeeRoutes");
const physicianRoute = require("./api/physicianRoutes");
const claimsAdminRoute = require("./api/claimsAdminRoutes");
const diagnosisRoute = require("./api/diagnosisRoutes");

// API Routes
router.use("/api/employee", employeeRoute);
router.use("/api/physician", physicianRoute);
router.use("/api/claims-admin", claimsAdminRoute);
router.use("/api/getDiagnoses", diagnosisRoute);


module.exports = router;