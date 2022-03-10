const express = require("express");
const controller = require("../controllers/controllers");

// this lets you replace all the times you use app, with router instead
const router = express.Router();

// routes calling their function from controllers
router.get("/", controller.defaultResponse);
router.get("/route", controller.chat_create);

// have to export the router
module.exports = router;
