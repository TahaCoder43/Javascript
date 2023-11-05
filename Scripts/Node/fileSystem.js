var http = require("http");
var fs = require("fs");

http.createServer(function (req, res) {
	fs.readFile('FileSystemTest.html', function(err, data) {
		res.writeHead(200, {"Content-Type": "text/html"});
		res.write(data);
		return res.end();
	})
	fs.appendFile('fileCreatedUsing.txt', "Hello, World!", function(err) {
		if (err) throw err;
		console.log("Saved!")
	})
	fs.open('mynewfile2.txt', 'w', function (err, file) {
		if (err) throw err;
		console.log('Saved!');
	}); 
	console.log("The file Ran")
}).listen(8080);