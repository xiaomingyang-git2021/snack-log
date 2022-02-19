// DEPENDENCIES
const cors = require('cors');
const express = require("express");
const snackController = require('./controllers/snackController.js')

// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json());
app.use('/snacks', snackController);

// ROUTES

// EXPORT
module.exports = app;
