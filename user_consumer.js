var http = require('http');
var user = require('user');

var user1 = new user('Sander', 'Rossel', new Date(1987, 11, 8));

// Creator of JavaScript.
// Don't know his exact birthdate...
var user2 = new user('Brendan', 'Eich', new Date(1961, 1, 1));

var server = http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(user1.getFullName() + ' is ' + user1.getAge() + ' years old.' +
    '\n' + user2.getFullName() + ' is ' + user2.getAge() + ' years old.');
});

server.listen(1337, '127.0.0.1');