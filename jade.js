/**
 * Created by johan on 02/05/2015.
 */
var fs = require('fs');
var pwd = require('path');
var winston = require('winston');
var localPlugins = {};
var speak = require('./lib/speak');
var pluginCtrl = require('./controllers/plugins-controller');
var mailCtrl = require('./controllers/mail-controller');
var jadeIo = require('./jade-socket');
//var jadeHttp = require('./jade-http');


exports.io = jadeIo;
//

var _http = null;

exports.http = function () {
    return _http;
};

exports.setHttp = function (http) {
    _http = http;
};

function _loadPlugin(path) {


    //fs.lstat(path, function (err, stat) {
    //    if (stat.isDirectory()) {
    //        // we have a directory: do a tree walk
    //        fs.readdir(path, function (err, files) {
    //            var f, l = files.length;
    //            for (var i = 0; i < l; i++) {
    //                f = pwd.join(path, files[i]);
    //                _loadPlugin(f);
    //            }
    //        });
    //    } else {
    //        // we have a file: load it
    //        require(path);
    //    }
    //});


}

var getModule = function (name, uncache) {
    var module = false;
    var path = false;

    path = pwd.normalize(__dirname + '/plugins/' + name + '/' + name + '.js');
    //if (config.debug || uncache) {
    //    require.uncache(path);
    //}
    module = require(path);

    //try {
    //
    //}
    //catch (ex) {
    //    try {
    //        path = pwd.normalize(__dirname + '/../' + name + '.js');
    //        if (config.debug || uncache) {
    //            require.uncache(path);
    //        }
    //        module = require(path);
    //    } catch (ex) {
    //    }
    //}

    initModule(module, name);
    if (!module) {
        return false;
    }

    var modified = fs.statSync(path).mtime.getTime();
    if (!module.lastModified) {
        module.lastModified = modified;
    }

    if (uncache) {
        return module;
    }

    if (module.lastModified < modified) {
        winston.log('info', 'Reloading ' + name);
        return getModule(name, true);
    }

    return module;
}

var initModule = function (module, name) {
    try {
        if (!module) {
            return;
        }

        if (module.initialized) {
            return;
        }
        module.initialized = true;

        winston.log('info', 'initModule: ', name);
        if (!module.init) {
            return;
        }
        module.init(SARAH);
    } catch (ex) {
        winston.log('warn', 'initModule: ' + ex.message);
    }
}


exports.getPlugin = function (pluginName) {
    var module = getModule(pluginName);
    return module;
};


exports.getLocalPlugins = function () {
    return localPlugins;
};


function _initPluginLoading() {

}

exports.init = function () {
    //localPlugins = {};
    //var path = pwd.join(__dirname, 'plugins');
    //_loadPlugin(path);
    pluginCtrl.init();
    mailCtrl.init();

    jadeIo.init();

    this.speak('Bonjour je suis prète');


};

function replaceAll(find, replace, str) {
    return str.replace(new RegExp(find, 'g'), replace);
}


exports.speak = function (text) {
    console.log('tts before: ' + text);
    text = replaceAll("é", "ai", text);
    text = replaceAll("è", "eai", text);
    console.log('tts after: ' + text);
    speak.tts(text);
};