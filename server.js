var express = require("express");

var PORT = process.env.PORT || 8080;

var app = express();

//making sure static (css, js) files can be used
app.use(express.static("public"));

//setting up data handling
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//set handlbars
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//importing the routes from shopController
var routes = require("./controllers/burgerController");

app.use(routes);


//starting the server
app.listen(PORT, function() {
    console.log("server now listening on http://localhost:" + PORT);
})