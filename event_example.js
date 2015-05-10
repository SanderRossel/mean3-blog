var http = require('http');
var EventEmitter = require('events').EventEmitter;
var emitter = new EventEmitter();

// Add a single event listener.
emitter.on('request', function(url) {
    console.log('requested ' + url);
});

// Add a second event listener.
emitter.on('request', function(url) {
    console.log('second listener, received request ' + url);
});

// Add a listener that will trigger only once.
emitter.once('request', function(url) {
    console.log('one time listener, received request ' + url);
});

// Create a function variable so we can remove this event later.
var removableEvent = function(url, counter) {
    console.log('this event will be removed in ' + counter + '...');
};

emitter.on('request', removableEvent);

// A second event.
emitter.on('message', function(message) {
    console.log('Received message: ' + message);
});

var counter = 3;
var server = http.createServer(function (req, res) {
    // Trigger the request event (which has two to four listeners)
    emitter.emit('request', req.url, counter);
    // Trigger the message event.
    emitter.emit('message', 'Received request for ' + req.url);
    counter--;
    if (counter === 0) {
        // Remove this particular event handler.
        emitter.removeListener('request', removableEvent);
    };
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('url logged to console.');
});

server.listen(1337, '127.0.0.1');
// Trigger the message event.
emitter.emit('message', 'Server started and listening on 127.0.0.1:1337');