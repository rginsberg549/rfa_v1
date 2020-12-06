const path = require("path");
const router = require("express").Router();
const employeeRoute = require("./api/employeeRoutes");
const physicianRoute = require("./api/physicianRoutes");
const claimsAdminRoute = require("./api/claimsAdminRoutes");

// API Routes
router.use("/api", employeeRoute);
router.use("/api", physicianRoute);
router.use("/api", claimsAdminRoute);


module.exports = router;