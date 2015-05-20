/**
 * Created by johan on 02/05/2015.
 */
/**
 * Created by johan on 01/05/2015.
 */
var jade = require('../jade');
var speak = require('../lib/speak');
var router = require('express').Router();
var winston = require('winston');
var pluginCtrl = require('../controllers/plugins-controller');

router.get('/', function (req, res) {
    res.json(pluginCtrl.getLocalPlugins());
});


router.post('/:name', function (req, res) {
    var pluginName = req.params.name;


    var data = req.body;

    var plugin = jade.getPlugin(pluginName);

    if (!plugin) {
        winston.error('Error in load plugin :' + pluginName);
        res.send(400);
        return;
    }

    plugin.action(data, function (response) {

        if (response.tts) {
            speak.tts(response.tts);
            res.send(response.tts);
        } else if (response.display) {

        }
    });


});

router.get('/:name', function (req, res) {
    var pluginName = req.params.name;

    var plugin = jade.getPlugin(pluginName);

    if (!plugin) {
        winston.error('Error in load plugin :' + pluginName);
        res.send(400);
        return;
    }

    console.log(req.query);

    plugin.action(req.query, function (response) {

        if (response.tts) {
            speak.tts(response.tts);
            res.send(response.tts);
        } else if (response.display) {

        }
    });


});

module.exports = router;