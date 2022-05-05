var express = require('express');
var router = express.Router();

// GET
// http://localhost:5000/api/
router.get('/', function(req, res, next) {
    res.send("Hello !!!</br />");
    res.end("Hello World");
});

module.exports = router;