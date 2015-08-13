var http = require('http');
var map = require('through2-map');
var server = http.createServer(function done (req, res) {
    // body...
    if (req.method != 'POST') {
        res.end("Error\n");
        return;
    }
    req.pipe(map (function (chunk) {
        return chunk.toString().toUpperCase()
    })).pipe(res);
})

server.listen(Number(process.argv[2]));
