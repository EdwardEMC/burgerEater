var mysql = require("mysql");

// var connection = mysql.createConnection({
//     host: "localhost",
//     port: 3306,
//     user: "root",
//     password: "Barista!993",
//     database: "eat_da_burger_db"
// });

if(process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDBURL);
}
else {
    connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: "Barista!993",
        database: "eat_da_burger_db"
    });
};

connection.connect(function(err) {
    if(err) {
        console.error("Error connecting: " + err.stack);
        return;
    }
    console.log("Connected as id " + connection.threadId);
})

module.exports = connection;