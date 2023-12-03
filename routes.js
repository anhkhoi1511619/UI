var express = require("express");
var url = require('url');
var update = require('./data/update');
var read = require('./data/read');
var data = require('./data/postData');
var router = express.Router();

router.get("/", function(req,res){
    console.log("Hello I am on a start page here");
    console.log("Url is: "+req.url);
    const user = data.load();
    res.render("index", {user});
})
router.get("/postContent", function(req,res){
    console.log("Send Content API");
    var resHeader = { 'Content-Type': 'text/html; charset=UTF-8' };
    res.writeHead(200, resHeader);
    const body = read.run();
    res.write(body);
    res.end();
})

router.get("/update", function(req,res){
    console.log("Hello I am ready here to update data");
    update.run();
    const user = data.load();
    res.render("index", {user});
})

module.exports = router;

