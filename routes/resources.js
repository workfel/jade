/**
 * Created by johan on 20/05/2015.
 */
var router = require('express').Router();
var controller = require('../jade/resources-controller');


router.get('/', function (req, res) {
    controller.list(function (err, response) {
        res.json(response);
    });
});


router.post('/generate', function (req, res) {
    controller.createIdFileIconFormYml(function (err, response) {
        res.json(response);
    });
});

module.exports = router;