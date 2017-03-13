

var http = require('http');
var fs = require('fs');
var server = http.createServer(handler);

var message = 'I am so happy to be part of the Node Girls workshop!';

function handler (req, resp) {

  var method = req.method;
  var endpoint = req.url;

    if (endpoint==="/"){
      resp.writeHead(200, {"Content-Type": "text/html"});

      fs.readFile(__dirname+'/public/index.html', (err, file) => {
        if (err) {
          console.log(err);
          return;
        }
        resp.end(file);
      });
    }
  }


server.listen(3000, function () {
    console.log("Server is listening on port 3000.  Ready to accept requests!");
});
