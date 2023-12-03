var fs = require('fs');

exports.run = function() {
    let content = JSON.parse(fs.readFileSync('data/postContent.json','utf-8'));
    content.id = 10;

    fs.writeFileSync('data/postContent.json', JSON.stringify(content));
    return;
}