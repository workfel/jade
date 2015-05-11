/**
 * Created by johan on 01/05/2015.
 */
exports.action = function (data, callback, config) {

    var meteoController = require('./meteo-controller');
    var ville = 'Toulouse';
    if (data.ville)
        ville = data.ville;


    meteoController.getMeteoTomorrow(ville, function (tts) {
        callback({'tts': tts});
    });
};