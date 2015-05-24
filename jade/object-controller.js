/**
 * Created by johan on 18/05/2015.
 */
var lowDb = require('lowdb');
var db = lowDb('jade.json')
var objTypeCtrl = require('./object-type-controller');
var _object = db('objects');

exports.listObjects = function (listChild, callback) {

    if (listChild) {
        var obj = [];

        for (var i = 0; i < _object.toArray().length; i++) {
            var object = _object.toArray()[i];
            var type = objTypeCtrl.getById(object.type);
            object.type = type;
            obj.push(object);
        }

        callback(null, obj);
    } else {
        callback(null, _object);
    }

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

exports.getById = function (objectId) {
    return _object.find({id: objectId});
};


exports.removeById = function (objectID) {
    _object.remove({id: objectID});
};

exports.ifExists = function (objectID) {
    var object = _object.find({id: objectID});
    return object;
};


function _addObject(objectModel) {
    _object.push(objectModel);
}
