/**
 * Created by johan on 20/05/2015.
 */
(function () {
    'use strict';
    angular
        .module('jadeApp')
        .service('SidebarService', SidebarService);

    SidebarService.$inject = [];

    function SidebarService() {


        this.getMenus = function () {
            return [
                {
                    name: 'Widgets',
                    icon: '',
                    url: ''
                }
            ]
        };
    }
})();