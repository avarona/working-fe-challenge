//initializes
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config();

//port
const port = 3001;

//routes
const productRoute = require("./routes/product");

//middleware
app.use(cors());

app.use(express.static(path.join(__dirname, "/public")));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//view engine
app.set("view engine", "ejs");
app.set("views", "views");

app.disable("view cache");

app.use("/products", productRoute);

//mongoose
mongoose.set("useFindAndModify", false);

mongoose
  .connect(process.env.MONGODB_URI, { useNewUrlParser: true })
  .then((result) => {
    app.listen(process.env.PORT || port, () => {
      console.log("connect");
    });
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = app;
