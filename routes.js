var express = require("express");
var update = require('./data/update');
var read = require('./data/read');
var data = require('./data/postData');
var router = express.Router();

router.get("/", function(req,res){
    console.log("Hello I am on a start page here");
    console.log("Url is: "+req.url);
    const str = read.run();
    res.render("index",{str});
})
router.get("/postContent", function(req,res){
    console.log("Send Content API");
    update.query(req);
    var resHeader = { 'Content-Type': 'text/html; charset=UTF-8' };
    res.writeHead(200, resHeader);
    const body = read.run();
    res.write(body);
    res.end();
})

module.exports = router;

