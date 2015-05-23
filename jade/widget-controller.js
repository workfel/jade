/**
 * Created by johan on 19/05/2015.
 */
/**
 * Created by johan on 18/05/2015.
 */
var lowDb = require('lowdb');
var db = lowDb('jade-widgets.json')

var _widgets = db('widgets');

exports.list = function (callback) {
    callback(null, _widgets);
};

exports.add = function (widgetModel, callback) {

    var objectFinded = this.ifExists(widgetModel.id);

    if (objectFinded) {//if exist remove and add  (udpate too long)
        this.removeById(widgetModel.id);
        _addObject(widgetModel);
        callback(null, 'ok');
    } else {
        _addObject(widgetModel);
        callback(null, 'ok');
    }
};


exports.findActive = function (callback) {
    var actives = _widgets.chain().where({active: true});

    callback(null, actives);
}

exports.getById = function (objectId) {
    return _widgets.find({id: objectId});
};


exports.removeById = function (objectID, callback) {
    _widgets.remove({id: objectID});

    if (callback) {
        callback(null, 1);
    }
};

exports.ifExists = function (objectID) {
    var object = _widgets.find({id: objectID});
    return object;
};


function _addObject(objectModel) {
    _widgets.push(objectModel);
}
