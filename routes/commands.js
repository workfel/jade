/**
 * Created by johan on 18/05/2015.
 */
var router = require('express').Router();
var controller = require('../controllers/commands-controller');

router.post('/add', function (req, res) {

    var objectModel = req.body;
    controller.add(objectModel, function (err, reponse) {
        res.send(200);
    });
});


router.get('/', function (req, res) {
    controller.list(function (err, response) {
        res.json(response);
    });
});

module.exports = router;