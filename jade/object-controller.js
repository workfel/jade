/**
 * Created by johan on 18/05/2015.
 */
var lowDb = require('lowdb');
var db = lowDb('jade.json')

var _object = db('objects');

exports.listObjects = function (callback) {
    callback(null, _object);
};

exports.addObject = function (objectModel, callback) {

    var objectFinded = this.ifExists(objectModel.id);
    console.log(objectFinded);

    if (objectFinded) {//if exist remove and add  (udpate too long)
        this.removeById(objectModel.id);
        _addObject(objectModel);
        callback(null, 'ok');
    } else {
        _addObject(objectModel);
        callback(null, 'ok');
    }
};

function _addObject(objectModel) {
    _object.push(objectModel);
}

exports.removeById = function (objectID) {
    _object.remove({id: objectID});
};

exports.ifExists = function (objectID) {
    var object = _object.find({id: objectID});
    return object;
};
