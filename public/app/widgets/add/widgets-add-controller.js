/**
 * Created by johan on 20/05/2015.
 */
(function () {
    'use strict';
    angular
        .module('jadeApp')
        .controller('SidebarCtrl', SidebarCtrl);

    SidebarCtrl.$inject = ['$scope', 'SidebarService'];

    function SidebarCtrl($scope, SidebarService) {

        function _init() {
            $scope.menus = SidebarService.getMenus();
        }

        _init();
    }
})();