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
    },
    update: function(deVal, idVal, cb) {
        orm.update("burgers", deVal, idVal, function(result) {
            cb(result);
        });
    },
    delete: function(colVal, cb) {
        orm.delete("burgers", [colVal], function(result) {
            cb(result);
        })
    }
}

module.exports = food_place;