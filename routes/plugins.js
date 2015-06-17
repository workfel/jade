/**
 * Created by johan on 02/05/2015.
 */
/**
 * Created by johan on 01/05/2015.
 */
var jade = require('../jade');
//var speak = require('../lib/speak');
var router = require('express').Router();
var winston = require('winston');
var pluginCtrl = require('../controllers/plugins-controller');
var jadeIo = require('../jade-socket');
var JADE = require('../jade');

router.get('/', function (req, res) {
    res.json(pluginCtrl.getLocalPlugins());

});


router.get('/test', function (req, res) {
    JADE.io.emit('switch-command', false);
    res.send(200);
});
router.get('/template', function (req, res) {
    var pluginName = req.query.name;

    pluginCtrl.getContentTemplateUrl(pluginName, function (err, result) {
        res.send(result);
    })
});

router.post('/:name', function (req, res) {
    var pluginName = req.params.name;


    var data = req.body;

    var plugin = jade.getPlugin(pluginName);

    console.log('plugin : ' + pluginName);
    console.log('params : ' + JSON.stringify(req.body));

    if (!plugin) {
        winston.error('Error in load plugin :' + pluginName);
        res.send(400);
        return;
    }

    plugin.action(data, function (response) {


        _actionPluginResponse(res, response);
    }, JADE);


});

function _actionPluginResponse(res, response) {
    if (response.switchCommand) {
        JADE.io.emit('switch-command', response.switchCommand);
    }
    if (response.tts) {
        JADE.speak(response.tts);
        res.send(response.tts);
    } else if (response.display) {

    } else {
        res.send(response);
    }
}

router.get('/:name', function (req, res) {
    var pluginName = req.params.name;

    var plugin = jade.getPlugin(pluginName);

    console.log('plugin : ' + pluginName);
    console.log('params : ' + JSON.stringify(req.body));

    if (!plugin) {
        winston.error('Error in load plugin :' + pluginName);
        res.send(400);
        return;
    }

    console.log(req.query);

    plugin.action(req.query, function (response) {
        _actionPluginResponse(res, response);
    });


});


module.exports = router;