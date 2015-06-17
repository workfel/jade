/**
 * Created by johan on 01/05/2015.
 */
var exec = require('shelljs').exec;

exports.action = function (data, callback, config) {


    if (data) {

        var gpio = data.gpio;
        var state = data.state;
        var type = data.type;

        exec('gpio -g mode ' + gpio + ' out', function (error, stdout, stderr) {

            if (type == null) {
                _normalDisplay(gpio, state, function (res) {
                    callback(res);
                })
            } else if (type == 'switch') {
                _switchDisplay(gpio, state, function (res) {
                    callback(res);
                })
            }

        });

    }

};

function _launch(gpio, state) {
    exec('gpio -g write ' + gpio + ' ' + state);
    console.log(state);
}

function _switchDisplay(gpio, state, cb) {

    _launch(gpio, 1);

    setTimeout(function () {
        _launch(gpio, 0);
        setTimeout(function () {
            _launch(gpio, 1);
            setTimeout(function () {
                _launch(gpio, 0);
                cb("switched :)")
            }, 1500);
        }, 500);

    }, 500);
    //exec('gpio -g write ' + gpio + ' 1', function (error, stdout, stderr) {


    //cb(' gpio ' + gpio + ' sate ' + state);
    //});

}

function _normalDisplay(gpio, state, cb) {
    exec('gpio -g write ' + gpio + ' ' + state, function (error, stdout, stderr) {

        cb(' gpio ' + gpio + ' sate ' + state);
    });
}