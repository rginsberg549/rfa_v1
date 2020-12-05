const path = require("path");
const router = require("express").Router();
const employeeRoute = require("./api/employeeRoutes");
const physicianRoute = require("./api/physicianRoutes");

// API Routes
router.use("/api", employeeRoute);
router.use("/api", physicianRoute);


module.exports = router;