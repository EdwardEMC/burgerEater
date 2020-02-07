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
    food_place.create(["name"], [req.body.name], function(req, res) {
        res.json({ id: result.insertId });
    });
});