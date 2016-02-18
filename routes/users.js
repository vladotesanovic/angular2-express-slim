var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({
    name: "Name",
    last: "Last name"  
  });
});

module.exports = router;
