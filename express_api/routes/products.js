var express = require("express");
var router = express.Router();
const product_schema = require("../models/products")

/* GET user page. */
router.get("/", async function (req, res, next) {
  // res.send("have to link products page - if any");

  const prod_info = await product_schema.find({});
  

  json = { "products_info": prod_info }
  // console.log("json: ", json);
  
  res.send(json);


});

module.exports = router;
