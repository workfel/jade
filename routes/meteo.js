/**
 * Created by johan on 01/05/2015.
 */
var speak = require('../lib/speak');
var router = require('express').Router();
var meteoController = require('../plugins/meteo/meteo-controller');

router.get('/meteo/:ville', function (req, res) {
    var ville = req.params.ville;

    if (!ville) {
        res.status(400);
    }

    meteoController.getMeteoTomorrow(ville, function (tts) {
        speak.tts(tts);
        res.send(tts);
    });

});


module.exports = router;