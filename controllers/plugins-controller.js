/**
 * Created by johan on 20/05/2015.
 */
var fs = require('fs');
var path = require('path');
var mLocalPlugins = {};


function _getFolderPlugin() {
    return 'plugins/';
}

exports.getContentTemplateUrl = function (pluginName,callback) {

    this.getPluginByName(pluginName, function (err, plugin) {

        if (plugin.templateUrl) {

            var path = _getFolderPlugin() + plugin.name + "/" + plugin.templateUrl;

            fs.readFile(path, {encoding: 'utf8'}, function (err, data) {
                if (err) throw err;

                callback(null, data);
            });
        } else {
            callback(null, '');
        }
    });


};

var _findConfPlugins = function (dir, callback) {
    var results = [];
    fs.readdir(dir, function (err, list) {
        if (err) return done(err);
        var pending = list.length;
        if (!pending) return done(null, results);
        list.forEach(function (fileName) {

            var file = path.resolve(dir, fileName);
            fs.stat(file, function (err, stat) {
                if (stat && stat.isDirectory()) {
                    //file is the path of plugin folder
                    var pathConfPlugin = file + "/" + fileName + ".json";
                    fs.readFile(pathConfPlugin, {encoding: 'utf8'}, function (err, data) {
                        if (err) throw err;
                        //console.log(data);
                        results.push(JSON.parse(data));
                        if (results.length == pending) {
                            callback(null, results);
                        }
                    });
                }
            });
        });
    });
};

exports.init = function () {

    this.reloadPlugins();
};

exports.getPluginByName = function (name, callback) {
    var path = _getFolderPlugin() + name + "/" + name + ".json";

    fs.readFile(path, {encoding: 'utf8'}, function (err, data) {
        if (err) throw err;

        callback(null, JSON.parse(data));
    });
};

exports.reloadPlugins = function () {
    _findConfPlugins(_getFolderPlugin(), function (err, result) {
        mLocalPlugins = result;
    })
};


exports.getLocalPlugins = function () {
    return mLocalPlugins;
};