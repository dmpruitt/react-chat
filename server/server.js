require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes/routes");

// express app
const app = express();

// listen port variable
const port = process.env.PORT;

// mongodb connection
//

// middleware & static files
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// all routes set up in routes folder
app.use(routes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
