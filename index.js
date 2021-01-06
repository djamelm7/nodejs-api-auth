const express = require("express");
const db = require("./config/database");
const app = express();
const cors = require('cors');
const winston = require('winston')
//require("./startup/logging")();
require("./startup/routes")(app);
require('./startup/config')();
app.use(cors());
  db
  .authenticate()
  .then(function(err) {
    console.log('Connection has been established successfully.');
  })
  .catch(function (err) {
    console.log('Unable to connect to the database:', err);
  });
const port = process.env.PORT || 3900;
app.listen(port , () => {winston.info(`Listening in Port ${port} ...`)});