/**
 * Created by johan on 01/05/2015.
 */
var express = require('express');
var app = express();
var http = require('http').Server(app);
//var http = require('./jade-http').init(app);
var config = require('./config');
var jade = require('./jade');
var bodyParser = require('body-parser');
//var jadeIo = require('./jade-socket');


//var io = require('socket.io')(http);
//
//
//io.on('connection', function (socket) {
//    console.log('a user connected');
//    socket.on('disconnect', function () {
//        console.log('user disconnected');
//    });
//});


app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({'extended': 'true'}));
app.use(bodyParser.json());


//Routes
var plugins = require('./routes/plugins');
var introduce = require('./routes/introduce');
var objects = require('./routes/objects');
var objectsType = require('./routes/objects-type');
var widgets = require('./routes/widgets');
var resources = require('./routes/resources');
var commands = require('./routes/commands');


app.use('/plugin', plugins);
app.use('/commands', commands);
app.use('/objects', objects);
app.use('/objects-type', objectsType);
app.use('/widgets', widgets);
app.use('/resources', resources);
app.use(introduce);


http.listen(app.get('port'), function () {
    console.log("Node app is running at localhost:" + app.get('port'));

    jade.setHttp(http);

    jade.init();




    //jadeIo.init();
});
