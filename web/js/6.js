var argv = process.argv;
var directory = argv[2];
var extension = argv[3];
var filter = require("./mymodule.js");

filter(directory, extension, function done(err, list) {
    // body...
    if (err) {
        console.log("error");
        return;
    }
    list.forEach(function (file) {
        console.log(file);
    })
})
