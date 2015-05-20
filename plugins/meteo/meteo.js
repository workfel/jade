/**
 * Created by johan on 01/05/2015.
 */
exports.action = function (data, callback, config) {

    var meteoController = require('./meteo-controller');
    var city = 'Toulouse';
    if (data.city)
        city = data.city;


    meteoController.getMeteoTomorrow(city, function (tts) {
        callback({'tts': tts});
    });
};