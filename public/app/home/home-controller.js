/**
 * Created by johan on 20/05/2015.
 */
(function () {
    'use strict';
    angular
        .module('jadeApp')
        .controller('HomeCtrl', HomeCtrl);

    HomeCtrl.$inject = ['$scope', 'WidgetsService', 'CommandService'];

    function HomeCtrl($scope, WidgetsService, CommandService) {


        function _init() {
            WidgetsService.getWidgetsActive(_onFindWidgetsActive);
            CommandService.getCommands(_onFindCommandsActive)

        }

        function _onFindCommandsActive(err, commands) {
            if (err) {
                console.log(err);
            } else {
                $scope.commands = commands;
            }
        }

        function _onFindWidgetsActive(err, widgets) {
            if (err) {
                console.log(err);
            } else {
                $scope.widgets = widgets;
            }
        }

        _init();
    }
})();