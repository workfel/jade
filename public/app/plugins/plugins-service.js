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

    PluginsService.$inject = ['$http','$templateCache'];

    function PluginsService($http,$templateCache) {


        this.getLocalPlugins = function (callback) {
            $http.get('/plugin').success(function (data, status) {
                callback(null, data);
            }).error(function (data, status) {

            });
        };

        this.getTemplate = function (pluginName, callback) {
            $http.get('/plugin/template?name=' + pluginName).success(function (data, status) {
                callback(null, data);
                //$templateCache.put('my-dynamic-template', data);
                //callback(null, true);
            }).error(function (data, status) {

            });
        };
    }
})();