const dbConfig = require("../config_mongo/db.config.js");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.hospital_enters_schema = require("./products.js")(mongoose);
db.hospital_info_schema = require("./merchant.js")(mongoose);
db.user_schema = require("./customer")(mongoose);

module.exports = db;
