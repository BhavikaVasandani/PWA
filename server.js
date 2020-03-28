

var express = require('express');
var app = express();
app.use('/css', express.static(__dirname + '/public/css'));

app.use('/Images', express.static(__dirname + '/public/Images'));
// Initialize static content
app.use(express.static(__dirname + '/public'));
var path = require('path');
app.use(express.static(path.join(__dirname, 'css')));
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});
var server = app.listen(9005, function(){
    var port = server.address().port;
    console.log("Server started at http://localhost:%s", port);
});
