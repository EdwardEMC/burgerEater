var express = require("express");

var router = express.Router();

var food_place = require("../models/food_place");

router.get("/", function(req, res) {
    food_place.allBurgers(function(result) {
        res.render("index", {burgers:result});
    });
});

router.get("/api", function(req, res) {
    food_place.allBurgers(function(result) {
        res.json(result);
    });
});

router.post("/api", function (req, res) { //create form for posting
    food_place.create([req.body.name], function(result) {
        res.json({ id: result.insertId });
    });
});

// Export routes for server.js to use.
module.exports = router;