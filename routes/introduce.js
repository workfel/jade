/**
 * Created by johan on 01/05/2015.
 */
/**
 * Created by johan on 01/05/2015.
 */
var speak = require('../lib/speak');
var router = require('express').Router();
var controller = require('../controllers/introduce-controller');

router.get('/jade/intro', function (req, res) {

    controller.presentationJade(function (txt) {
        speak.tts(txt);
    });
});


module.exports = router;