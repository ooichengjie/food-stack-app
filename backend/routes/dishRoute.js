const express = require("express");
const router = express.Router();
const dishController = require("../controller/dishController");
const authController = require("../controller/authController");


router.get("/", dishController.getAllDishes);
router.use(authController.protect);

// router.post("/ddDish", dishController.addDish);
router.delete("/:id", authController.roles(["admin"]),  dishController.deleteDish);

module.exports = router;
