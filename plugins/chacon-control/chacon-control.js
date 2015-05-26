/**
 * Created by johan on 02/05/2015.
 */
exports.action = function (data, callback, config) {


    //par default on lance la command de base
    var action = 'commandede base';
    if (!data.action) {
        action = data.action;
    }

    var pinGpio = data.pinGpio;
    var idTelecommand = data.idTelecommand;
    var idPrise = data.idPrise;

    //TODO : if state is not defined the scritp switch the state automatically
    var state = data.state;


    var controller = require('./chacon-control-controller');

    controller.launchCommand(pinGpio, idTelecommand, idPrise, state, function (err, response) {

        //TODO : launch socket for client

        var switchCommandModel = response;
        switchCommandModel.id = data.id;
        callback({
            'tts': 'Action effectué',
            'switchCommand': switchCommandModel
        });
    });
    //controller.timeWork(begin, end, function (error, time) {
    //
    //    // Callback with TTS
    //    callback({'tts': time});
    //});

};
