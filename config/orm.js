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

        queryString += "VALUE ";
        queryString += "(?)";

        connection.query(queryString, [colVal], function(err, result) {
            if(err) throw err;

            cb(result);
        })
    },
    update: function(table, deVal, idVal, cb) {
        var queryString = "UPDATE " + table;

        queryString += " SET ";
        queryString += "devoured ";
        queryString += "= ?";
        queryString += " WHERE ";
        queryString += "id ";
        queryString += "= ?";

        console.log(queryString, deVal, idVal);

        connection.query(queryString, [deVal, idVal], function(err, result) {
            if(err) throw err;

            cb(result);
        });
    },
    delete: function(table, colVal, cb){
        var queryString = "DELETE FROM " + table;

        queryString += " WHERE ";
        queryString += "id ";
        queryString += "= ?";

        connection.query(queryString, [colVal], function(err, result) {
            if(err) throw err;

            cb(result);
        });
    }
}

// Export the orm object for the model
module.exports = orm;