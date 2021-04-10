var express = require("express");
var router = express.Router();

/* GET user page. */
router.get("/", function (req, res, next) {
  res.send("have to link merchant page - if any");
});

module.exports = router;
