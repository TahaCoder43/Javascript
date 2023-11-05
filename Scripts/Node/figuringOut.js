var http = require("http");


http.createServer(function(req, res) {
    res.writeHead(200, {'Content-type': "text/html"})
    res.write("<p>Hello World</p>")
    res.write(req.url)
    console.log(req.url)
    res.end()
}).listen(8080);

console.log("Listening on port 8080")