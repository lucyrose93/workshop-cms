var http = require('http');
var server = http.createServer(handler);

var message = 'I am so happy to be part of the Node Girls workshop!';

function handler (req, resp) {
  resp.writeHead(200, {"Content-Type": "text/html"});
  resp.write(message);
  resp.end();
}

server.listen(3000, function () {
    console.log("Server is listening on port 3000.  Ready to accept requests!");
});
