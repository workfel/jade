/**
 * Created by johan on 01/05/2015.
 */
var express = require('express');
var config = require('./config');
var jade = require('./jade');
var bodyParser = require('body-parser');

var app = express();


app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({'extended': 'true'}));
app.use(bodyParser.json());


//Routes
var plugins = require('./routes/plugins');
var introduce = require('./routes/introduce');
var objects = require('./routes/objects');


app.use(plugins);
app.use('/objects', objects);
app.use(introduce);


app.listen(app.get('port'), function () {
    console.log("Node app is running at localhost:" + app.get('port'));
    jade.init();
});
