var http = require('http');
var fs = require('fs');
var module = require('./module');

console.log(module.obj.someFunction(1));

function serveStaticFile(response, path, contentType, responceCode) {
    if (!responceCode) {
        responceCode = 200;
    }

    fs.readFile(__dirname + path, function(err, data) {
        if (err) {
            response.writeHead(500, {'Content-Type': 'plain/text'});
            response.end("Internal Error");
        } else {
            response.writeHead(responceCode, {'Content-Type': contentType});
            response.end(data);
        }
    });
}

http.createServer(function (request, response) {
    if (request.url === '/') {
        serveStaticFile(response, '/public/home.html', 'text/html');
    } else if (request.url === '/home') {
        serveStaticFile(response, '/public/home.html', 'text/html');
    } else if (request.url === '/about') {
        serveStaticFile(response, '/public/about.html', 'text/html');
    } else if (request.url === '/browser-script.js') {
        serveStaticFile(response, '/js/browser-script.js', 'application/x-javascript');
    } else {
        serveStaticFile(response, '/public/404.html', 'text/html', 404);
    }

}).listen(8081);
