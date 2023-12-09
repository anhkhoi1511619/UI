var express = require("express");
var controller = require('./controller/handler');

var router = express.Router();

router.get("/", function(req,res){
    console.log("Hello I am on a start page here");
    console.log("Url is: "+req.url);
    controller.query_and_write(req);
    const str = controller.read();
    res.render("index",{str});
})
router.get("/postContent", function(req,res){
    console.log("Send Content API");
    var resHeader = { 'Content-Type': 'text/html; charset=UTF-8' };
    res.writeHead(200, resHeader);
    const body = controller.read();
    res.write(body);
    res.end();
})

module.exports = router;

