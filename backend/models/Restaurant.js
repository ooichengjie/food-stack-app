const mongoose = require("mongoose");
const restaurantSchema = new mongoose.Schema({
    name: {type: String,},
    address: {type: String,},
    cuisine: {type: String,},
    description: {type: String,},
    contactNumber: {type: Number},
    user: {
        type: mongoose.Schema.ObjectId,
        ref: "User"
    },
    dishes: {type: String}
});

const Restaurant = mongoose.model("Restaurant", restaurantSchema);

module.exports = Restaurant;