const express = require("express");
const router = express.Router();

const authController = require("../controller/authController");
const orderController = require("../controller/orderController");

router.use(authController.protect);

router.post("/",authController.roles(["admin", "user"]),orderController.createOrder);

module.exports = router;