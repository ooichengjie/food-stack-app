const axios = require("axios");
const User = require("../models/User");

exports.getAllUsers = async (req, res) => {
 try {
    const users = await User.find();
    res.status(200).json({ status: "success", data: { users } });
 } catch (err) {
    console.log(err.message);
    res.status(400).json({ status: "error", msg: err.message });
 }
};

exports.getUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        res.status(200).json({ status: "success", data: { user } });
    } catch (err) {
        console.log(err.message);
        res.status(400).json({ status: "error", msg: err.message });
    }
};

exports.deleteUser = async (req, res) => {
    try {
      await User.findByIdAndDelete(req.params.id);
      res
        .status(204)
        .json({ status: "success", msg: "User successfully deleted" });
    } catch (err) {
      console.log(err.message);
      res.status(400).json({ status: "error", msg: err.message });
    }
  };


  
