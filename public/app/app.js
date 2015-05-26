/**
 * Created by johan on 02/05/2015.
 */
(function () {
    'use strict';

    angular.module('jadeApp', ['ngMaterial', 'ngRoute', 'pascalprecht.translate', 'slugifier',
        'jade.widget.ui',
        'jade.ui.tree',
        'jade.utils.compiler',
        'jade.ui.widget.command',
        'jade.ui.icon'])
        .config(['$routeProvider',
            function ($routeProvider) {
                $routeProvider.
                    when('/home', {
                        templateUrl: 'app/home/home.html'
                    }).
                    when('/plugins/', {
                        templateUrl: 'app/plugins/views/plugins.html'
                    }).
                    when('/components/add', {
                        templateUrl: 'app/components/views/add/component.html'
                    }).
                    when('/objects/', {
                        templateUrl: 'app/objects/views/objects.html'
                    }).
                    when('/objects/add', {
                        templateUrl: 'app/objects/views/add/objects-add.html'
                    }).
                    when('/widgets/', {
                        templateUrl: 'app/widgets/views/widgets.html'
                    }).
                    when('/widgets/add', {
                        templateUrl: 'app/widgets/views/add/widgets-add.html'
                    }).
                    otherwise({
                        redirectTo: '/home'
                    })
            }
        ]);
})();

