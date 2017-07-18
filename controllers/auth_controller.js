var express = require("express");
var router = new express.Router();

router.post("/signup", function(req, res) {
    return res.status(200).end();
});

router.post("/signin", function(req, res) {
    return res.status(200).end();
});

module.exports = router; 