/**
 * Created by johan on 02/05/2015.
 */
var speak = require('../lib/speak');
var router = require('express').Router();
var controller = require('../plugins/time-work/time-work-controller');

router.get('/work', function (req, res) {

    controller.timeWork("90 Boulevard pierre et marie curie 31200 Toulouse",
        "5 route de Toulouse, Cornebarrieu", function (error, time) {
            res.send(time);

            speak.tts(time);
        });


});


module.exports = router;

