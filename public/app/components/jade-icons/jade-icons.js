/**
 * Created by johan on 24/05/2015.
 */
(function () {
    'use strict';
    angular
        .module('jade.ui.icon', ['template/jade/jade-icons.html'])
        .directive('jadeIcons', JadeIcons);

    JadeIcons.$inject = ['$mdDialog'];

    function JadeIcons($mdDialog) {
        return {
            restrict: 'E',
            scope: {
                iconselected: '&'
            },
            template: getTemplate,
            controller: JadeIconsCtrl
        }

        function getTemplate(element, attr) {
            var tmp =
                '<md-button class="md-primary" ng-click="showModal()">' +
                '{{txt}}' +
                '</md-button>'
            return tmp;
        }

        JadeIconsCtrl.$inject['$scope', 'WidgetsService', '$filter'];
        function JadeIconsCtrl($scope, WidgetsService, $filter) {

            $scope.txt = $filter('translate')('chooseIcon');

            $scope.onWidgetClicked = function (widget) {
                WidgetsService.launchPluginWidget(widget);
            };

            $scope.showModal = function () {
                $mdDialog.show({
                    controller: DialogController,
                    templateUrl: 'template/jade/jade-icons.html'
                })
                    .then(function (answer) {
                        //$scope.alert = 'You said the information was "' + answer + '".';
                        console.log(answer);
                        $scope.iconselected({
                            icon: answer
                        });
                    }, function () {
                        $scope.iconselected();
                    });
            }

        };

        DialogController.$inject['$scope', 'UtilsService'];
        function DialogController($scope, UtilsService) {

            function _init() {

                $scope.iconSelected = null;
                UtilsService.getIconClass(function (err, icons) {
                    $scope.icons = icons;
                })
            }

            $scope.onIconChoosed = function (icon) {
                $scope.iconSelected = icon;
            };

            $scope.onValid = function () {
                $mdDialog.hide($scope.iconSelected);
            };

            _init()
        }

    }


    angular.module("template/jade/jade-icons.html", []).run(["$templateCache", function ($templateCache) {
        $templateCache.put("template/jade/jade-icons.html",
            '<md-dialog>' +
            '<md-dialog-content>' +
            '<md-subheader class="md-sticky-no-effect">Select icon</md-subheader>' +
            '<div layout="row" layout-wrap layout-margin layout-align="center center">' +
            '<md-progress-circular class="md-accent" md-mode="indeterminate" ng-if="!icons"></md-progress-circular>' +
            '<i ng-repeat="icon in icons" class="fa fa-{{icon}} fa-2x" layout-margin  ng-click="onIconChoosed(icon)" ng-dblclick="onValid()"></i>' +
            '</div>' +
            '<md-button class="md-primary" ng-click="onValid()">confirm</md-button>' +
            '</md-dialog-content>' +
            '</md-dialog>');
    }]);
})();