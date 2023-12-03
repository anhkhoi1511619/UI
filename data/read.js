var fs = require('fs');

exports.run = function() {
    const str = fs.readFileSync('data/postContent.json', { encoding: 'utf-8' });
    return str;
}