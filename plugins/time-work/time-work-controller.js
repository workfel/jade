/**
 * Created by johan on 02/05/2015.
 */
var gm = require('googlemaps');

function _tempsItineraire(start, end, callback) {
    gm.directions(start, end, function (err, data) {
        if (err) return callback(err);

        var duration = data['routes'][0]['legs'][0]['duration']['value']; //second
        duration /= 60; //to minutes
        duration = Math.round(duration);

        var tts = "Il y a " + duration + " minutes pour arriver au travail";
        if (callback)
            callback(null, tts);
    });
}


exports.timeWork = _tempsItineraire;