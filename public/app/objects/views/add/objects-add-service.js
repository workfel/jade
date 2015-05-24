/**
 * Created by johan on 20/05/2015.
 */
(function () {
    'use strict';
    angular
        .module('jadeApp')
        .service('ObjectsAddService', ObjectsAddService);

    ObjectsAddService.$inject = ['$http', 'UtilsService'];

    function ObjectsAddService($http, UtilsService) {

        this.isValid = function (model) {
            return true;
        }

        this.add = function (model, callback) {
            model.id = UtilsService.slug(model.name);

            $http.post('/objects/add', model).success(function (data, status) {
                callback(null, data);
            }).error(function (data, status) {
                callback(data);
            });
        }
    }
})();