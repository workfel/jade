/**
 * Created by johan on 19/05/2015.
 */
/**
 * Created by johan on 18/05/2015.
 */
var lowDb = require('lowdb');
var db = lowDb('jade-commands.json')

var _commands = db('commands');

exports.list = function (callback) {
    callback(null, _commands);
};

exports.add = function (model, callback) {

    var objectFinded = this.ifExists(model.id);

    if (objectFinded) {//if exist remove and add  (udpate too long)
        this.removeById(model.id);
        _addObject(model);
        callback(null, 'ok');
    } else {
        _addObject(model);
        callback(null, 'ok');
    }
};


exports.findActive = function (callback) {
    var actives = _commands.chain().where({active: true});

    callback(null, actives);
}

exports.getById = function (objectId) {
    return _commands.find({id: objectId});
};


exports.removeById = function (objectID, callback) {
    _commands.remove({id: objectID});

    if (callback) {
        callback(null, 1);
    }
};

exports.ifExists = function (objectID) {
    var object = _commands.find({id: objectID});
    return object;
};


function _addObject(objectModel) {
    _commands.push(objectModel);
}
