var express = require("express");
var data = require('./data/update');
var read = require('./data/read');
var router = express.Router();

router.get("/", function(req,res){
    console.log("Hello I am on a start page here");
    console.log("Url is: "+req.url);
    const post = data.query(req);
    res.render("index", {post});
})
router.get("/postContent", function(req,res){
    console.log("Send Content API");
    var resHeader = { 'Content-Type': 'text/html; charset=UTF-8' };
    res.writeHead(200, resHeader);
    const body = read.run();
    res.write(body);
    res.end();
})

module.exports = router;

