/**
 * Created by johan on 18/05/2015.
 */
var router = require('express').Router();
var controller = require('../jade/object-controller');

router.post('/', function (req, res) {

    var objectModel = req.body;
    controller.addObject(objectModel, function (err, reponse) {
        res.send(200);
    });
});


router.get('/', function (req, res) {
    controller.listObjects(function (err, response) {

        res.json(response);
    });
});

module.exports = router;