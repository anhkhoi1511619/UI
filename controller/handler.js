var fs = require('fs');
// var data = require('data/postData');


exports.read = function() {
    const str = fs.readFileSync('data/postContent.json', { encoding: 'utf-8' });
    return str;
}

exports.query_and_write = function(req) {
    //Update object first
    // var post = data.load();
    const id = req.query.id;
    console.log("id is in object data: "+id);
    // post.id = id;
    const title = req.query.title;
    console.log("title is in object data:: "+title);
    // post.title = title;
    const subtitle = req.query.subtitle;
    console.log("subtitle is in object data:: "+subtitle);
    // post.subtitle = subtitle;
    const name = req.query.name;
    console.log("name is in object data:: "+name);
    // post.name = name;


    // write json data to send when call API 👇
    let content = JSON.parse(fs.readFileSync('data/postContent.json','utf-8'));
    content.id = id;
    content.name = name;
    content.title = title;
    content.subtitle = subtitle;
    const sendStr =  JSON.stringify(content);
    console.log("json will send: "+sendStr);
    fs.writeFileSync('data/postContent.json', JSON.stringify(content));
    return;
}