const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const merchant = new Schema({
  username: String,
  password: String,
  name: String,
  location: String,
});

module.exports = mongoose.model("Merchant", merchant);
