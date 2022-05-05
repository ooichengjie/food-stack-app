const express = require("express");
const router = express.Router();
const authController = require("../controller/authController");
const restaurantController = require("../controller/restaurantController");

router.use(authController.protect);

router.get("/", restaurantController.getAllRestaurants);

router.post(
    "/",
    authController.roles(["admin", "restaurant"]),
    restaurantController.create
  );

router.get("/:id", restaurantController.getRestaurant);

module.exports = router;
