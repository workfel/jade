/**
 * Created by johan on 20/05/2015.
 */
var fs = require('fs');
var path = require('path');
var mLocalPlugins = {};


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
                    var pathConfPlugin = file + "\\" + fileName + ".json";
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


exports.reloadPlugins = function () {
    _findConfPlugins('plugins/', function (err, result) {
        mLocalPlugins = result;
    })
};


exports.getLocalPlugins = function () {
    return mLocalPlugins;
};