/**
 * Created by johan on 20/05/2015.
 */
(function () {
    'use strict';
    angular
        .module('jadeApp')
        .controller('WidgetsCtrl', WidgetsCtrl);

    WidgetsCtrl.$inject = ['$scope', 'WidgetsService'];

    function WidgetsCtrl($scope, WidgetsService) {

        function _init() {
            WidgetsService.getWidgets(function (err, widgets) {
                $scope.widgets = widgets;
            });
        }

        $scope.onWidgetClicked = function (widget) {
            WidgetsService.launchPluginWidget(widget);
        };


        _init();
    }
})();