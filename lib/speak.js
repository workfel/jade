/**
 * Created by johan on 01/05/2015.
 */
var exec = require('shelljs').exec;
var winston = require('winston');
var fs = require('fs');

var fileWrited = 'bin/tts.txt';

var isTalking = false;
var _queueTts = [];

function _isWin() {
    if (process.platform.indexOf('win') !== -1) {
        return true;
    }
    return false;
}

function _writeFile(text, callback) {
    fs.writeFile(fileWrited, text, {encoding: 'utf8'}, function (error) {
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


function _tts() {
    if (isTalking) return;

    if (_queueTts.length <= 0) return;

    if (_isWin()) {

        _writeFile(_queueTts[0], function () {
            isTalking = true;
            exec('ptts.vbs -u ' + _getPathFile(), function (error, stdout, stderr) {
                winston.error(error);
                winston.debug('stdout : ' + stdout);
                winston.debug('stderr : ' + stderr);

                _queueTts.shift();
                isTalking = false;
                _tts();
            });
        });

    } else {//linux
        isTalking = true;
        exec('./speech.sh ' + _queueTts[0], function (error, stdout, stderr) {

            console.log('stdout : ' + stdout);
            console.log('stderr : ' + stderr);

            _queueTts.shift();
            isTalking = false;
            _tts();
        });
    }
};


exports.tts = function (text) {


    if (!text) return;

    _queueTts.push(text);

    _tts();
};