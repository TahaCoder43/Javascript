var http = require("http");
var url = require('url');
var fs = require("fs");

http.createServer(function(req, res) {
	res.writeHead(200, {"Content-Type": "text/html"});
	var q = url.parse(req.url, true);
	var fileName = "." + q.pathname
	console.log(fileName)
	fs.readFile(fileName, function(err, data) {
		console.log(err, data)
	})
	res.write("Program has Ran")
}).listen(8080)
let adr = 'http://localhost:8080/default.htm?year=2017&month=february&path=URLtest.html';
let q = url.parse(adr, true);

console.log(q.host)
console.log(q.pathname)
console.log(q.search)

var qdata = q.query
console.log(qdata.month)