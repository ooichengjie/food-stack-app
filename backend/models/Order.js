const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    amount: {
        type: Number,
        required: [true, "Please enter the price"]
    },
    resName: {    
        type: String
    },
    user: {
        type: mongoose.Schema.ObjectId,
        required: true,
        ref: "User"
    },
    dishData: []
});

module.exports = mongoose.model("Order", orderSchema);
