/**
 * Created by johan on 23/05/2015.
 */
(function () {
    'use strict';
    angular
        .module('jade.ui.widget.command', [])
        .directive('jadeWidgetCommand', JadeWidgetCommand);

    JadeWidgetCommand.$inject = [];

    function JadeWidgetCommand() {
        return {
            restrict: 'E',
            scope: {
                widget: '='
            },
            template: getTemplate,
            controller: JadeWidgetCommandCtrl
        }
    }

    function getTemplate(element, attr) {
        var tmp =
            '<a class="md-primary md-raised md-button md-default-theme widget-content-land" style="background-color: {{widget.color}}"  aria-label="{{widget.name}}" >' +
            '<div layout="row">' +
            '<span flex="80">' +
            '<i class="fa fa-{{widget.icon}}  fa-3x"></i>' +
            '<span layout-margin>{{widget.name}}</span>' +
            '</span>' +
            '<md-switch ng-model="widget.state" aria-label="Etat de la prise" ng-change="onStatusChange()" layout-align="end center">' +
            '</md-switch>' +
            '</div>'


        '<div class="md-ripple-container"></div></a>';
        return tmp;
    }

    JadeWidgetCommandCtrl.$inject = ['$scope', '$http', '$rootScope', 'CommandService'];

    function JadeWidgetCommandCtrl($scope, $http, $rootScope, CommandService) {

        var socket;

        function _init() {
            socket = io();

            socket.on('switch-command', _onStateSwitchChanged);
        }

        //$scope.color = $scope.widget.color ? $scope.widget.color : '';
        $scope.widget.icon = $scope.widget.icon ? $scope.widget.icon : CommandService.getClassIconWithCommandType($scope.widget.command.id);


        $scope.onWidgetClicked = function (widget) {
            //WidgetsService.launchPluginWidget(widget);
            //console.log($scope.widget.state);
            ////$scope.apply();
            //$scope.widget.state = true;
            //$rootScope.$apply();
            //console.log($scope.widget.state);
        };


        $scope.onStatusChange = function () {
            //console.log($scope.widget.state);
            var params = $scope.widget.data;
            params.state = $scope.widget.state;
            params.id = $scope.widget.id;
            $http.post('plugin/' + $scope.widget.plugin, params);
            //socket.emit('switch-command', $scope.widget.state);
        }

        function _onStateSwitchChanged(switchCommandModel) {
            //console.log($scope.widget.state );

            if (switchCommandModel.id !== $scope.widget.id) return;

            $scope.widget.state = switchCommandModel.state;

            if ($scope.widget.state) {
                $scope.widget.icon = CommandService.getClassIconWithCommandType($scope.widget.command.id) + '-active';
            } else {
                $scope.widget.icon = CommandService.getClassIconWithCommandType($scope.widget.command.id);
            }
            $rootScope.$apply();
            //console.log($scope.widget.state );
        };


        _init();


    };

})();