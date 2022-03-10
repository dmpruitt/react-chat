// need to import the models here, like this
// eg. const Blog = require)'../models/blog

// put all of the functions that interact with the

const chat_create = (req, res) => {
  // code in here
  res.send("Default server up and running from controller.js");
};

const defaultResponse = (req, res) => {
  res.send("Default server up and running");
};

module.exports = {
  chat_create,
  defaultResponse,
};
