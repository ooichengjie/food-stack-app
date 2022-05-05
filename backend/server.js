const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/authRoute");
const userRoute = require("./routes/userRoute");
const restaurantRoute = require("./routes/restaurantRoute");
// const dishRoute = require("./routes/dishRoute");



dotenv.config();
const app = express();


mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  })
  .then(() => console.log("Connected to DB"));

app.use(express.json());

const port = process.env.PORT || 5000;

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/res", restaurantRoute);
// app.use("/api/dishes", dishRoute);

app.listen(port, () => {
  console.log(`Listening from port ${port}`);
});