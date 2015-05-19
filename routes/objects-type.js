/**
 * Created by johan on 18/05/2015.
 */
var router = require('express').Router();
var controller = require('../jade/object-type-controller');

router.post('/', function (req, res) {

    var objectModel = req.body;
    controller.addType(objectModel, function (err, reponse) {
        res.send(200);
    });
});


router.get('/', function (req, res) {
    controller.listTypes(function (err, response) {

        res.json(response);
    });
});

module.exports = router;