var tcp = require('net');
var port = Number(process.argv[2]);

function zeroFill(i) {
  return (i < 10 ? '0' : '') + i
}

function now () {
  var d = new Date()
  return d.getFullYear() + '-'
    + zeroFill(d.getMonth() + 1) + '-'
    + zeroFill(d.getDate()) + ' '
    + zeroFill(d.getHours()) + ':'
    + zeroFill(d.getMinutes()) + '\n'
}

var server = tcp.createServer(function done(socket) {
    // body...
    socket.write(now());
    socket.end();
});
server.listen(port);
