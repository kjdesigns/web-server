var express = require("express");
var app = express();

var middleware = require("./middleware.js");

app.use(middleware.logger);
//app.use(middleware.requireAuthentication);

app.get("/about",middleware.requireAuthentication,function(req,res){
    res.send("About us!");
});

app.use(express.static("public"));
//console.log(__dirname);

app.listen(process.env.PORT, process.env.IP,function(){
    console.log("THe server has started");
});