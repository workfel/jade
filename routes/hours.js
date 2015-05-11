/**
 * Created by johan on 01/05/2015.
 */
var speak = require('../lib/speak');
var router = require('express').Router();

router.get('/date', function (req, res) {
    var date = new Date();

    var text = "il est " + date.getHours() + " heure ";

    if (date.getMinutes() > 0) {
        text += date.getMinutes();
    }

    speak.tts(text);
});


module.exports = router;