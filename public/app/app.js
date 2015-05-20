/**
 * Created by johan on 02/05/2015.
 */
(function () {
    'use strict';

    angular.module('jadeApp', ['ngMaterial', 'ngRoute', 'pascalprecht.translate', 'slugifier'])
        .config(['$routeProvider',
            function ($routeProvider) {
                $routeProvider.
                    when('/home', {
                        templateUrl: 'app/home/home.html'
                    }).
                    when('/widgets/', {
                        templateUrl: 'app/widgets/widgets.html'
                    }).
                    when('/widgets/add', {
                        templateUrl: 'app/widgets/add/widgets-add.html'
                    }).
                    otherwise({
                        redirectTo: '/home'
                    })
            }
        ]);
})();

