var http = require('http');
var bl = require('bl');
http.get(process.argv[2], function done(response){
    response.pipe(bl(function (err, data){
        if (err) {
            console.error(err);
            return;
        }
        data = data.toString();
        console.log(data.length);
        console.log(data);
    }))
})
