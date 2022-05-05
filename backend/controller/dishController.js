const Dish = require("../models/Dish");


exports.getAllDishes = async (req, res) => {
    try {
        const dishes = await Dish.find();
        res.status(200).json({ status: "success", data: { dishes } });
    } catch (err) {
        console.log(err.message);
        res.status(400).json({ status: "error", msg: err.message });
    }

exports.deleteDish = async (req, res) => {
    try {
        await Dish.findByIdAndDelete(req.params.id);
        res.status(204).json({ status: "success", msg: "Dish successfully deleted" });
    } catch (err) {
        console.log(err.message);
        res.status(400).json({ status: "error", msg: err.message });
    }
}

// exports.addDish = async (req, res) => {
//     const { name, price, type, description } = req.body;
//     let dish = await Dish.findOne({ name });

//     try {
//         if (dish) {return res.status(400).json({ status: "error", msg: "Dish already exists" });}
//         dish = await Dish.create({ name, price, type, description });
//          res.status(201).json({ status: "success", data: { dish} });
//     } catch (err) {
//         console.log(err.message);
//         res.status(400).json({ status: "error", msg: err.message });
//     }
// };
}
