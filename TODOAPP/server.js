var express = require("express");
var app = express();

app.use(express.static('public'))

app.get("/", function(req, res){
    console.log("dirname : " + __dirname);
    res.sendFile(__dirname  + "/index.html");
});

app.listen(8087, () => console.log("starting app"));