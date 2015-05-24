/**
 * Created by johan on 24/05/2015.
 */
(function () {
    'use strict';
    angular
        .module('jade.ui.tree', ['template/jade/jade-tree.html'])
        .directive('jadeTree', JadeTree);

    JadeTree.$inject = [];
    function JadeTree() {
        return {
            restrict: 'E',
            $scope: {
                item: '='
            },
            templateUrl: 'template/jade/jade-tree.html'
        }
    }

    angular.module("template/jade/jade-tree.html", []).run(["$templateCache", function ($templateCache) {
        $templateCache.put("template/jade/jade-tree.html",
            '{{item.name}}' +
            '<ul ng-if="item.child">' +
            '<li ng-repeat="item in item.child" ng-include="\'template/jade/jade-tree.html\'">' +
            '</li>' +
            '</ul>');
    }]);

})();