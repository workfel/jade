/**
 * Created by johan on 19/05/2015.
 */
var yaml = require('js-yaml');
var fs = require('fs');
var lowDb = require('lowdb');
var db = lowDb('font-awesome-id.json')

var _object = db('class');

exports.list = function (callback) {
    // Get document, or throw exception on error
    callback(null, _object);

};


exports.createIdFileIconFormYml = function (callback) {
    // Get document, or throw exception on error

    _object.remove();

    var listIDIcon = [];
    try {
        var doc = yaml.safeLoad(fs.readFileSync('public/resources/font-awesome/icons.yml', 'utf8'));
        var icons = doc.icons;

        for (var i = 0; i < icons.length; i++) {
            var icon = icons[i];
            listIDIcon.push(icon.id);

        }
    } catch (e) {
        console.log(e);
    }

    _object.push(listIDIcon);

    callback(null, 'ok');

};