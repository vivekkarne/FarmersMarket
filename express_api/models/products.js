
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const products = new Schema({
  product_name: String,
  quantity_left: Number,
});

module.exports = mongoose.model("Products", products);
