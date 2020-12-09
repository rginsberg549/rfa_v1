const path = require("path");
const router = require("express").Router();
const employeeRoute = require("./api/employeeRoutes");
const physicianRoute = require("./api/physicianRoutes");
const claimsAdminRoute = require("./api/claimsAdminRoutes");

// API Routes
router.use("/api/employee", employeeRoute);
router.use("/api/physician", physicianRoute);
router.use("/api/claims-admin", claimsAdminRoute);


module.exports = router;