const router = require("express").Router();
const employeeRoute = require("./api/employeeRoutes");
const physicianRoute = require("./api/physicianRoutes");
const claimsAdminRoute = require("./api/claimsAdminRoutes");
const diagnosisRoute = require("./api/diagnosisRoutes");
const treatmentRoute = require("./api/treatmentRoutes");

// API Routes
router.use("/api/employees", employeeRoute);
router.use("/api/physicians", physicianRoute);
router.use("/api/claimsAdmins", claimsAdminRoute);
router.use("/api/getDiagnoses", diagnosisRoute);
router.use("/api/getTreatments", treatmentRoute);


module.exports = router;