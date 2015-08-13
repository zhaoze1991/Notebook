var http = require('http');
var url = require('url');

function parsetime (time) {
  return {
    hour: time.getHours(),
    minute: time.getMinutes(),
    second: time.getSeconds()
  }
}

function unixtime (time) {
  return { unixtime : time.getTime() }
}

var server = http.createServer(function done (req, res) {
    // body...
    var parse = url.parse(req.url, true);
    var time = new Date(parse.query.iso);
    var ans;
    if (req.url.toString().indexOf("unixtime") > -1) {
      ans = unixtime(time);
    } else {
      ans = parsetime(time);
    }
    if (ans) {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(ans));
    } else {
      res.writeHead(400, { 'Content-Type': 'application/json' });
    }
})

server.listen(process.argv[2]);
