// Require all npm packages and routes
const express = require('express');
const session = require('express-session');
const passport = require("./middleware/passport-local");
const listEndpoints = require('express-list-endpoints');
const routes = require("./routes");
const mongoose =require('mongoose');


const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('./public'));

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/Scvngr";

mongoose.connect(MONGODB_URI);

// Use sessions to keep track of user login
app.use(session({ secret: 'keyboard cat', resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

app.use(routes);

// Syncing our database and logging a message to the user upon success
app.listen(PORT, function () {
  console.log("App running on port " + PORT + "!");
  console.log(listEndpoints(app));
});
