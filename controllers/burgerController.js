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

router.post("/api", function(req, res) { //create form for posting
    food_place.create([req.body.name], function(result) {
        res.json({ id: result.insertId });
    });
});

// router.put(); for updating devour status
router.put("/api/:id", function(req, res) {
    var id = req.params.id;
    food_place.update(req.body.devoured, id, function(result) {
        if(result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    })
});

router.delete("/api/:id", function(req, res) {
    var id = req.params.id;
    food_place.delete(id, function(result) {
        console.log(result);

        res.status(200).end()
    });
});

// Export routes for server.js to use.
module.exports = router;