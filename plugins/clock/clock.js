/**
 * Created by johan on 01/05/2015.
 */
exports.action = function (data, callback, config) {

    var ttsMorning = data.tts;

    callback({'tts': ttsMorning});

};