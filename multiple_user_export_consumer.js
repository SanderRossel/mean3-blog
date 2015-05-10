var http = require('http');
var user1 = require('user_export');
var user2 = require('user_export');

user1.firstName = 'Sander';
user1.lastName = 'Rossel';
user1.birthDate = new Date(1987, 11, 8);

// Creator of JavaScript.
user2.firstName = 'Brendan';
user2.lastName = 'Eich';
// Don't know his exact birthdate...
user2.birthDate = new Date(1961, 1, 1);

var server = http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(user1.getFullName() + ' is ' + user1.getAge() + ' years old.' +
    '\n' + user2.getFullName() + ' is ' + user2.getAge() + ' years old.');
});

server.listen(1337, '127.0.0.1');