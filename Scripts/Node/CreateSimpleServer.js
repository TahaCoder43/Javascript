var http = require("http");

http.createServer(function(req, res) {
	res.writeHead(200, {'Content-type': "text/html"})
	res.write("<p>Hello <b>World</b></p>");
	res.write(req.url)
	res.end()
}).listen(8080);