/**
 * Created by johan on 01/05/2015.
 */
var exec = require('shelljs').exec;
var winston = require('winston');
var fs = require('fs');

var fileWrited = 'bin/tts.txt';

function _isWin() {
    if (process.platform.indexOf('win') !== -1) {
        return true;
    }
    return false;
}

function _writeFile(text, callback) {
    fs.writeFile(fileWrited, text, function (error) {
        if (error) {
            winston.error(error);
        } else {
            callback();
        }
    })
}

function _getPathFile() {
    return process.cwd() + "\\" + fileWrited;
}

exports.tts = function (text) {

    if (!text) return;

    if (_isWin()) {

        _writeFile(text, function () {
            exec('ptts.vbs -u ' + _getPathFile(), function (error, stdout, stderr) {
                winston.error(error);
                winston.debug('stdout : ' + stdout);
                winston.debug('stderr : ' + stderr);
            });
        });

    } else {//linux
        exec('./speech.sh ' + text, function (error, stdout, stderr) {
            winston.error(error);
            winston.debug('stdout : ' + stdout);
            winston.debug('stderr : ' + stderr);
        });
    }


};