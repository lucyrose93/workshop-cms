

var http = require('http');

var handler = require('./src/handler');
// var fs = require('fs');
// var querystring = require("querystring");



var server = http.createServer(handler);

server.listen(3000, function () {
    console.log("Server is listening on port 3000.  Ready to accept requests!");
});
