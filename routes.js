var express = require("express");
var url = require('url');
var fs = require('fs');
var filename = "";

var router = express.Router();

router.get("/", function(req,res){
    console.log("Hello I am on a start page here");
    res.render("index");
})
router.get("/postContent", function(req,res){
    console.log("Send Content API");
    var responseData = "data/error.json";
    var resHeader = { 'Content-Type': 'text/html; charset=UTF-8' };

    if (req.url.indexOf('postContent') > -1) {
        console.log(`postContent API`);

        if (req.method === 'GET') {
            console.log(`request[GET]`);
            //GETデータを受けとる

            var str = "";
            data = url.parse(req.url, true).query;
            // 連想配列から取り出す
            for (var key in data) {
                str += key + '=' + data[key] + '&';
            }
            console.log(`Parameter:` + str);

            responseData = "data/postContent.json"
        }
    }


    res.writeHead(200, resHeader);
    const body = fs.readFileSync(responseData, { encoding: 'utf-8' });

    console.log(`Shift_JIS`);
    console.log(`Filename: ${filename}`);
    res.write(body);
    res.end();
    //res.render("index");
})

module.exports = router;

