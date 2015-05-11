/**
 * Created by johan on 02/05/2015.
 */
exports.action = function (data, callback, config) {


    var controller = require('./time-work-controller');
    controller.timeWork("90 Boulevard pierre et marie curie 31200 Toulouse",
        "5 route de Toulouse, Cornebarrieu", function (error, time) {

            // Callback with TTS
            callback({'tts': time});
        });

};
