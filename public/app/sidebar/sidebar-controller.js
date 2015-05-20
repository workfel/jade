/**
 * Created by johan on 20/05/2015.
 */
(function () {
    'use strict';
    angular
        .module('jadeApp')
        .controller('SidebarCtrl', SidebarCtrl);

    SidebarCtrl.$inject = ['$scope', 'SidebarService', '$location'];

    function SidebarCtrl($scope, SidebarService, $location) {

        function _init() {
            $scope.menus = SidebarService.getMenus();
        }

        $scope.onGoTo = function (menu) {
            $location.path(menu.url);
        };

        _init();
    }
})();