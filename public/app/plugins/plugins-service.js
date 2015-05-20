/**
 * Created by johan on 20/05/2015.
 */
/**
 * Created by johan on 20/05/2015.
 */
(function () {
    'use strict';
    angular
        .module('jadeApp')
        .service('PluginsService', PluginsService);

    PluginsService.$inject = ['$http'];

    function PluginsService($http) {


        this.getLocalPlugins = function (callback) {
            $http.get('/plugin').success(function (data, status) {
                callback(null, data);
            }).error(function (data, status) {

            });
        };
    }
})();