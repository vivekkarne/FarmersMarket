const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cart = new Schema({
  order_id: String,
  customer_id: String,
  product_id: String
});

module.exports = mongoose.model("Cart", cart);
