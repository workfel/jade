/**
 * Created by johan on 20/05/2015.
 */
(function () {
    'use strict';
    angular
        .module('jadeApp')
        .controller('PluginsCtrl', PluginsCtrl);

    PluginsCtrl.$inject = ['$scope', 'PluginsService'];

    function PluginsCtrl($scope, PluginsService) {

        function _init() {
            PluginsService.getLocalPlugins(function (err, plugins) {
                $scope.localPlugins = plugins;
            });
        }


        _init();
    }
})();