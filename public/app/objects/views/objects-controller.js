/**
 * Created by johan on 20/05/2015.
 */
(function () {
    'use strict';
    angular
        .module('jadeApp')
        .controller('ObjectsCtrl', ObjectsCtrl);

    ObjectsCtrl.$inject = ['$scope', 'ObjectsService'];

    function ObjectsCtrl($scope, ObjectsService) {

        function _init() {
            ObjectsService.getObjects(function (err, objs) {
                $scope.objects = objs;
            });
        }


        _init();
    }
})();