const router = require("express").Router();
const employeeRoute = require("./api/employeeRoutes");
const physicianRoute = require("./api/physicianRoutes");
const claimsAdminRoute = require("./api/claimsAdminRoutes");
const diagnosisRoute = require("./api/diagnosisRoutes");
const treatmentRoute = require("./api/treatmentRoutes");
const requirementRoute = require("./api/requirementRoutes");
const formRoute = require("./api/formRoute");

// API Routes
router.use("/api/employees", employeeRoute);
router.use("/api/physicians", physicianRoute);
router.use("/api/claimAdmins", claimsAdminRoute);
router.use("/api/getDiagnoses", diagnosisRoute);
router.use("/api/getTreatments", treatmentRoute);
router.use("/api/getRequirements", requirementRoute);
router.use("/api/form", formRoute);


module.exports = router;