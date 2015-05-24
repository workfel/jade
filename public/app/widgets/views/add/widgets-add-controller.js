/**
 * Created by johan on 20/05/2015.
 */
(function () {
    'use strict';
    angular
        .module('jadeApp')
        .controller('WidgetsAddCtrl', WidgetsAddCtrl);

    WidgetsAddCtrl.$inject = ['$scope', 'PluginsService', 'UtilsService', '$mdSidenav', 'WidgetAddService'];

    function WidgetsAddCtrl($scope, PluginsService, UtilsService, $mdSidenav, WidgetAddService) {

        function _init() {
            _initWidgetCreator();
            PluginsService.getLocalPlugins(function (err, localPlugins) {
                if (err) {
                    console.log(err);
                } else {
                    $scope.localPlugins = localPlugins;
                }
            });
        }


        $scope.onValidWidget = function () {
            if (WidgetAddService.isValid()) {
                WidgetAddService.addWidget($scope.widgetCreator);
            } else {
                //Show error
            }
        };

        $scope.onChangePlugin = function (plugin) {
            //reset params
            $scope.widgetCreator.params = {};
            $scope.pluginSelected = JSON.parse(plugin);

            $scope.widgetCreator.plugin = $scope.pluginSelected.name;
        };


        $scope.onShowAllIcon = function () {
            $mdSidenav('right').toggle();
            UtilsService.getIconClass(function (err, icons) {
                $scope.icons = icons;
            })
        }

        $scope.onIconChoosed = function (icon) {
            $scope.widgetCreator.icon = icon;
            //$mdSidenav('right').toggle();
        };

        function _initWidgetCreator() {
            $scope.widgetCreator = {
                params: {}
            };

        }


        _init();
    }
})();