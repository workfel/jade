/**
 * Created by johan on 18/05/2015.
 */
var router = require('express').Router();
var controller = require('../jade/widget-controller');

router.post('/add', function (req, res) {

    var objectModel = req.body;
    controller.add(objectModel, function (err, reponse) {
        res.send(200);
    });
});

router.delete('/:id', function (req, res) {

    var id = req.params.id;

    controller.removeById(id, function (err, response) {
        if (err) {

        } else {
            res.send(200);
        }
    });
});

router.get('/', function (req, res) {
    controller.list(function (err, response) {
        res.json(response);
    });
});

module.exports = router;