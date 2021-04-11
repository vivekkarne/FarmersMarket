
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const products = new Schema({
  // product_id: String, "_id" - in mongo
  image_url: String,
  product_name: String,
  price: Number
});

module.exports = mongoose.model("Products", products);
