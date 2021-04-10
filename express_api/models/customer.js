const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const customer = new Schema({
  username: String,
  password: String,
  first_name: String,
  last_name: String,
  address: String,
});

module.exports = mongoose.model("Customer", customer);
