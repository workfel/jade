/**
 * Created by johan on 20/05/2015.
 */
(function () {
    'use strict';
    angular
        .module('jadeApp')
        .service('WidgetsService', WidgetsService);

    WidgetsService.$inject = ['$http', 'UtilsService'];

    function WidgetsService($http, UtilsService) {


        this.getWidgets = function (callback) {

            $http.get('/widgets').success(function (data, status) {
                callback(null, data);
            }).error(function (data, status) {
                callback(data);
            });
        }

        this.launchPluginWidget = function (widget) {
            $http.post('plugin/'+ widget.plugin, widget.params);
        }

    }
})();