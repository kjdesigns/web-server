var express = require("express");
var app = express();

var middleware = {
    requireAuthentication: function(req,res,next){
        console.log("private route hit!");
        next();
    },
    logger:function(req,res,next){
        console.log("Request: " + new Date().toString() + " " + req.method+ " " + req.originalUrl);
        next();
    }
};

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