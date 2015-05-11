/**
 * Created by johan on 01/05/2015.
 */

var request = require('request');
var urlApi = 'http://api.openweathermap.org/data/2.5/weather?lang=fr&units=metric&q=';

function _getMeteoTomorrow(city, callback) {

    var url = urlApi + city;

    request(url, function (error, response, body) {


        var meteoTxt = _parseApi(city, JSON.parse(body));

        callback(meteoTxt);
    });
}


function _parseApi(city, jsonApi) {
    var description = jsonApi.weather[0].description;
    var main = jsonApi.main;

    return "Demain a " +
        city + " il fera " + description + " avec une maximale de " +
        Math.round(main.temp_max) + " degrai est une minimale de  " + Math.round(main.temp_min) + ' degrai';
}

module.exports = {
    getMeteoTomorrow: _getMeteoTomorrow
};