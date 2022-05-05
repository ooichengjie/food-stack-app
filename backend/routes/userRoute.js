const express = require("express");
const router = express.Router();
const authController = require("../controller/authController");
const userController = require("../controller/userController");

router.use(authController.protect);

router.get("/", userController.getAllUsers);
router.get("/:id", userController.getUser);


router.delete(
    "/:id",
    authController.roles(["admin"]),
    userController.deleteUser
  );
  

module.exports = router;