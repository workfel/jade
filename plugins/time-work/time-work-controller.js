/**
 * Created by johan on 02/05/2015.
 */
var gm = require('googlemaps');

function _tempsItineraire(start, end, callback) {
    gm.directions(start, end, function (err, data) {
        if (err) return callback(err);

        var duration = data['routes'][0]['legs'][0]['duration']['value']; //second

        duration = secondsToTime(duration);
        //duration /= 60; //to minutes
        //duration = Math.round(duration);
        //if (duration > 60) {
        //
        //}

        var tts = "Il y a " + duration + " pour arriver au travail";
        if (callback)
            callback(null, tts);
    });
}


function secondsToTime(secs) {
    var hours = Math.floor(secs / (60 * 60));

    var divisor_for_minutes = secs % (60 * 60);
    var minutes = Math.floor(divisor_for_minutes / 60);


    var str = '';

    if (hours > 0) {
        str = hours + ' heures ';
    }
    if (minutes > 0) {
        str += minutes + ' minutes';
    }


    return str;
}

exports.timeWork = _tempsItineraire;