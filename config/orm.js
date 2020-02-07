var connection = require("./connection");

var orm = {
    all: function(whatToSelect, table, cb){
        var queryString = "SELECT ?? FROM ??";

        connection.query(queryString, [whatToSelect, table], function(err, result) {
            if(err) throw err;

            cb(result)
        })
    },
    create: function(table, colVal, cb){
        var queryString = "INSERT INTO " + table + " (name) ";

        queryString += " VALUE ";
        queryString += "?";

        connection.query(queryString, [colVal], function(err, result) {
            if(err) throw err;

            cb(result);
        })
    },
    update: function(){}, //not needed for basic functionality
    delete: function(table, colVal){
        var queryString = "DELETE " + table;

        queryString += " WHERE ";
        queryString += "id ";
        queryString += " = ?";

        connection.query(queryString, [colVal], function(err, result) {
            if(err) throw err;

            cb(result);
        });
    }
}

// Export the orm object for the model
module.exports = orm;