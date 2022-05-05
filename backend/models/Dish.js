const mongoose = require("mongoose");

const dishSchema = new mongoose.Schema({
 name: {type: String,},
 price: {type: Number,},
 type: {type: String},
 description: {type: String,}
});
const Dish = mongoose.model("Dish", dishSchema);

module.exports = Dish;