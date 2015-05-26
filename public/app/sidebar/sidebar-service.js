/**
 * Created by johan on 20/05/2015.
 */
(function () {
    'use strict';
    angular
        .module('jadeApp')
        .service('SidebarService', SidebarService);

    SidebarService.$inject = ['$filter'];

    function SidebarService($filter) {


        this.getMenus = function () {
            return [
                {
                    name: 'Widgets',
                    icon: '',
                    url: '/widgets',
                    child: [{
                        name: 'Add Widgets',
                        icon: '',
                        url: '/widgets/add'
                    }]
                },
                {
                    name: $filter('translate')('components'),
                    icon: '',
                    url: '/components',
                    child: []
                },
                {
                    name: 'Plugins',
                    icon: '',
                    url: '/plugins',
                    child: []
                },
                {
                    name: 'Objects',
                    icon: '',
                    url: '/objects',
                    child: [{
                        name: 'Add Objects',
                        icon: '',
                        url: '/objects/add'
                    }]
                }
            ]
        };
    }
})();