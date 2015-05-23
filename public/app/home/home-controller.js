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

        $scope.workClicked = function () {
            $http.post('http://localhost:5000/plugin/time-work');
        };

        $scope.meteoClicked = function () {
            $http.post('http://localhost:5000/plugin/meteo', {ville: "Toulouse"});
        };


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