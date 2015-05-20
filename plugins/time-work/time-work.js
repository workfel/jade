/**
 * Created by johan on 02/05/2015.
 */
exports.action = function (data, callback, config) {

    var begin = '90 Boulevard pierre et marie curie 31200 Toulouse';

    var end = '5 route de Toulouse, Cornebarrieu';
    if (data.begin)
        begin = data.begin;
    if (data.end) {
        end = data.end;
    }


    var controller = require('./time-work-controller');
    controller.timeWork(begin, end, function (error, time) {

        // Callback with TTS
        callback({'tts': time});
    });

};
