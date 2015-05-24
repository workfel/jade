/**
 * Created by johan on 23/05/2015.
 */
(function () {
    'use strict';
    angular
        .module('jade.widget.ui', [])
        .directive('jadeWidget', JadeWidget);

    JadeWidget.$inject = [];

    function JadeWidget() {
        return {
            restrict: 'E',
            scope: {
                widget: '='
            },
            template: getTemplate,
            controller: JadeWidgetCtrl
        }
    }

    function getTemplate(element, attr) {
        var tmp =
            '<a class="md-primary md-raised md-button md-default-theme content" style="background-color: {{color}}" ng-click="onWidgetClicked(widget)" aria-label="{{widget.name}}" >' +
            '<div layout="column">' +
            '<i class="fa fa-{{widget.icon}}  fa-3x"></i>' +
            '{{widget.name}}' +
            '</div>'


        '<div class="md-ripple-container"></div></a>';
        return tmp;
    }

    function JadeWidgetCtrl($scope, WidgetsService) {

        $scope.color = $scope.widget.color ? $scope.widget.color : '';
        $scope.widget.icon = $scope.widget.icon ? $scope.widget.icon : 'picture-o';

        $scope.onWidgetClicked = function (widget) {
            WidgetsService.launchPluginWidget(widget);
        };


    };

})();