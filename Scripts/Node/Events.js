var http = require("http");
var events = require("events");
var eventEmitter = new events.EventEmitter;

function eventResponse() {
	console.log("yeah");
};

eventEmitter.on("nothing", eventResponse);


http.createServer(function(req, res) {
	res.writeHead(200, {'Content-type': 'text/html'});
	res.write("<!DOCTYPE html>")
	res.write('<p>Hello World!</p>');
	res.end()
	eventEmitter.emit("nothing");	
}).listen(8080);

