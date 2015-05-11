/**
 * Created by johan on 02/05/2015.
 */
var app = angular.module('jadeApp', ['ngMaterial']);

app.controller('AppCtrl', ['$scope', '$mdSidenav', 'MenuService', function ($scope, $mdSidenav, MenuService) {
    $scope.toggleSidenav = function (menuId) {
        $mdSidenav(menuId).toggle();
    };

    $scope.menus = MenuService.getMenus();

    $scope.pageSelected = $scope.menus[0];


}]);


app.service('MenuService', [function () {
    this.getMenus = function () {
        return [{
            'name': 'Home',
            'url': 'home.html'
        }, {
            'name': 'Travail',
            'url': ''
        }];
    }
}]);


app.controller('HomeCtrl', ['$scope', '$mdSidenav', '$http', function ($scope, $mdSidenav, $http) {

    $scope.workClicked = function () {
        $http.post('http://localhost:5000/plugin/time-work');
    };

    $scope.meteoClicked = function () {
        $http.post('http://localhost:5000/plugin/meteo', {ville: "Toulouse"});
    };
}]);