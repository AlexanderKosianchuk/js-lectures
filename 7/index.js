var http = require('http');
var module = require('./module');

console.log(module.obj.someFunction(1));

var html = "<html>"
    + "<header></header>"
    + "<body>"
    + "%"
    + "</body>"
    + "<script src='browser-script.js'></script>"
    + "</html>";

var script = "console.log('hello');"

function sendResponse(response, headerCode, headerContentType, body) {
    response.writeHead(headerCode, {'Content-Type': headerContentType});
    response.end(body);
}

http.createServer(function (request, response) {
    if (request.url === '/') {
        sendResponse(response, 200, 'text/plane',
            'Home'
        );
    } else if (request.url === '/home') {
        sendResponse(response, 200, 'text/html',
            html.replace("%", "<p style='font-size: 40px; color: blue;'>Home</p>")
        );
    } else if (request.url === '/about') {
        sendResponse(response, 200, 'text/html',
            html.replace("%", "<p style='font-size: 40px'>About</p>")
        );
    } else if (request.url === '/browser-script.js') {
        sendResponse(response, 200, 'application/x-javascript',
            script
        );
    } else {
        sendResponse(response, 404, 'text/html',
            html.replace("%", "<p style='font-size: 40px'>Not Found</p>")
        );
    }

}).listen(8081);
