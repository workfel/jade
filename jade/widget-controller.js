/**
 * Created by johan on 19/05/2015.
 */
/**
 * Created by johan on 18/05/2015.
 */
var lowDb = require('lowdb');
var db = lowDb('jade-widget.json')

var _widgets = db('widget');

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

exports.getById = function (objectId) {
    return _widgets.find({id: objectId});
};


exports.removeById = function (objectID) {
    _widgets.remove({id: objectID});
};

exports.ifExists = function (objectID) {
    var object = _widgets.find({id: objectID});
    return object;
};


function _addObject(objectModel) {
    _widgets.push(objectModel);
}
