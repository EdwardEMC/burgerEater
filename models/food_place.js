var orm = require("../config/orm");

var food_place = {
    allBurgers: function(cb) {
        orm.all("*", "burgers", function(result) {
            cb(result);
        });
    },
    create: function(colVal, cb) {
        orm.create("burgers", colVal, function(result) {
            cb(result);
        });
    }
    //delete and update not needed.........yet
}

module.exports = food_place;