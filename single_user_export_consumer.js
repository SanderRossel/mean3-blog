var http = require('http');
var user = require('user_export');

user.firstName = 'Sander';
user.lastName = 'Rossel';
user.birthDate = new Date(1987, 11, 8);

var server = http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(user.getFullName() + ' is ' + user.getAge() + ' years old.');
});

server.listen(1337, '127.0.0.1');