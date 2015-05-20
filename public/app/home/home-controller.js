/**
 * Created by johan on 20/05/2015.
 */
(function () {
    'use strict';
    angular
        .module('jadeApp')
        .controller('HomeCtrl', HomeCtrl);

    HomeCtrl.$inject = ['$scope', '$http'];

    function HomeCtrl($scope, $http) {


        function _init() {


        }

        $scope.workClicked = function () {
            $http.post('http://localhost:5000/plugin/time-work');
        };

        $scope.meteoClicked = function () {
            $http.post('http://localhost:5000/plugin/meteo', {ville: "Toulouse"});
        };

        _init();
    }
})();