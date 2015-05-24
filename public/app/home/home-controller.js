/**
 * Created by johan on 20/05/2015.
 */
(function () {
    'use strict';
    angular
        .module('jadeApp')
        .controller('HomeCtrl', HomeCtrl);

    HomeCtrl.$inject = ['$scope', '$http', 'WidgetsService'];

    function HomeCtrl($scope, $http, WidgetsService) {


        function _init() {
            WidgetsService.getWidgetsActive(_onFindWidgetsActive)

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