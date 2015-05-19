/**
 * Created by johan on 18/05/2015.
 */
var lowDb = require('lowdb');
var db = lowDb('jade-object-type.json')

var _types = db('types');

exports.listTypes = function (callback) {
    callback(null, _types);
};

exports.addType = function (typeModel, callback) {

    var objectFinded = this.ifExists(typeModel.id);

    if (objectFinded) {//if exist remove and add  (udpate too long)
        this.removeById(typeModel.id);
        _addObject(typeModel);
        callback(null, 'ok');
    } else {
        _addObject(typeModel);
        callback(null, 'ok');
    }
};

exports.getById = function (objectId) {
    return _types.find({id: objectId});
};


exports.removeById = function (objectID) {
    _types.remove({id: objectID});
};

exports.ifExists = function (objectID) {
    var object = _types.find({id: objectID});
    return object;
};


function _addObject(objectModel) {
    _types.push(objectModel);
}
