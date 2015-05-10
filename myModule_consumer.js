var http = require('http');
var myModuleRoot = require('./myModule.js');
var myModuleFolder = require('myModule');

var server = http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(myModuleRoot.hello +
    '\n' + myModuleFolder.hello);
});

server.listen(1337, '127.0.0.1');