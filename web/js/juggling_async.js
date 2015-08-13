var http = require('http');
var bl = require('bl');
var list = [];
var count = 0;
function http_get(index, callback) {
    http.get(process.argv[2 + index], function done(response){
        response.pipe(bl(function (err, data){
            if (err) {
                console.error(err);
                return;
            }
            data = data.toString();
            list[index] = data;
            count++;
            if (count == 3)
                callback()
        }))
    })
}
function printall() {
    for (var i = 0; i < 3; ++i) {
        console.log(list[i]);
    }
}

for (var i = 0; i < 3; ++i) {
    http_get(i, printall);
}
