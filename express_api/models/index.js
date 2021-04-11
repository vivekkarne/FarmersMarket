const dbConfig = require("../config_mongo/db.config.js");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.products = require("./products.js")(mongoose);
db.merchant = require("./merchant.js")(mongoose);
db.customer = require("./customer")(mongoose);
db.cart = require("./cart");

module.exports = db;
