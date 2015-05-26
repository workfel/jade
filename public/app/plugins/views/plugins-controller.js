/**
 * Created by johan on 20/05/2015.
 */
(function () {
    'use strict';
    angular
        .module('jadeApp')
        .controller('PluginsCtrl', PluginsCtrl);

    PluginsCtrl.$inject = ['$scope', 'PluginsService', 'ObjectsService', 'CommandService'];

    function PluginsCtrl($scope, PluginsService, ObjectsService, CommandService) {

        function _init() {
            $scope.action = {};

            PluginsService.getLocalPlugins(function (err, plugins) {
                $scope.localPlugins = plugins;
            });

            ObjectsService.getObjects(function (err, objs) {
                $scope.objects = objs;
            });

            CommandService.getCommandsType(function (err, command) {
                $scope.commands = command;
            })
        }

        $scope.onPluginClicked = function (plugin) {
            $scope.pluginSelected = plugin;


            if (angular.isDefined(plugin.templateUrl)) {
                $scope.templateNoExist = null;
                PluginsService.getTemplate(plugin.name, function (err, htmlTemplate) {
                    $scope.template = htmlTemplate;
                });
            } else {
                $scope.template = null;
                $scope.templateNoExist = PluginsService.getTemplateUnexist();
            }
        };

        $scope.onComponentTemplateFinished = function () {

            $scope.action.plugin = $scope.pluginSelected.name;
            //get the object of template plugin
            $scope.action.data = $scope.data;
            console.log($scope.action);
            CommandService.addCommand($scope.action, function (err, response) {

            });
        };


        _init();
    }
})
();