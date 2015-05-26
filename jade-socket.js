/**
 * Created by johan on 26/05/2015.
 */
//var http = require('./jade-http').http;
var JADE = require('./jade');
var io = null;


exports.emit = function (name, data, callback) {
    if (!io) {
        console.log('The socket.io isn\'t initialized launch the init() method');
    }

    io.emit(name, data);
};

exports.io = _getIo();


function _getIo() {
    //if (!io)
        //_init();
    return io;
}


function _init() {
    io = require('socket.io')(JADE.http());
}
exports.init = function () {
    _init();

    io.on('connection', function (socket) {
        console.log('a user connected');
        socket.on('disconnect', function () {
            console.log('user disconnected');
        });
    });
};