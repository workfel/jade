/**
 * Created by johan on 20/05/2015.
 */
(function () {
    'use strict';
    angular
        .module('jadeApp')
        .service('CommandService', CommandService);

    CommandService.$inject = ['$http', 'UtilsService'];

    function CommandService($http, UtilsService) {


        this.getCommandsType = function (callback) {
            $http.get('/objects-type').success(function (data, status) {
                callback(null, data);
            }).error(function (data, status) {
                callback(data);
            });
        };

        this.getCommands = function (callback) {
            $http.get('/commands').success(function (data, status) {
                callback(null, data);
            }).error(function (data, status) {
                callback(data);
            });
        };

        this.addCommand = function (model, callback) {
            model.object = JSON.parse(model.object);
            model.name = model.object.name;
            model.id = UtilsService.slug(model.name);

            $http.post('/commands/add', model).success(function (data, status) {
                callback(null, data);
            }).error(function (data, status) {
                callback(data);
            });
        };

        this.getClassIconWithCommandType = function (name) {
            if (name === 'switch') {
                return 'bolt';
            } else if (name === 'lighting') {
                return 'lightbulb-o';
            }
        }


    }
})();
