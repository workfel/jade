/**
 * Created by johan on 01/05/2015.
 */



function _presentationJade(callback) {

    var txt = "Bonjour je suis JADE un assistant domotique.Je suis a votre disposition";

    callback(txt);
}

module.exports = {
    presentationJade: _presentationJade
};