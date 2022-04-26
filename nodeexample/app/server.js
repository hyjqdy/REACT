var http = require('http'); // built-in module import
// var fs = require('fs');
var converter = require('./converter'); // our module
var url = require('url');

// http://localhost:3000/add?x=45&y=10
// http://localhost:3000/sub?x=45&y=10

var server = http.createServer((req, res) => {
    let pathname = url.parse(req.url).pathname; //string
    let params = url.parse(req.url, true).query; // array
    if(pathname === '/add') {
        let result = converter.add(parseInt(params['x']), parseInt(params['y']));
        res.write(""+result);
    } else if(pathname === '/sub') {
        let result = converter.sub(parseInt(params['x']), parseInt(params['y']));
        res.write(""+result);
    }
    res.end();
});

server.listen(3000, () => console.log("started!!!"));