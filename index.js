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
var timeTransport = require('./routes/time-work');
var hours = require('./routes/hours');
var meteo = require('./routes/meteo');



app.use(plugins);
app.use(introduce);
app.use(hours);
app.use(meteo);
app.use(timeTransport);


app.listen(app.get('port'), function () {
    console.log("Node app is running at localhost:" + app.get('port'));

    jade.init();

});

