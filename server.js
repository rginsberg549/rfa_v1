if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");

const PORT = process.env.PORT || 8080;
const db = require("./models");

const routes = require("./routes");

const app = express();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(PATH.join(__dirname, "./client/build/index.html"));
  })
}
// Add routes, both API and view
app.use(routes);

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({ force: false }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});