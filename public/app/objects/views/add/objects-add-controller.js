/**
 * Created by johan on 20/05/2015.
 */
(function () {
    'use strict';
    angular
        .module('jadeApp')
        .controller('ObjectsAddCtrl', ObjectsAddCtrl);

    ObjectsAddCtrl.$inject = ['$scope', 'ObjectsService', 'ObjectsAddService'];

    function ObjectsAddCtrl($scope, ObjectsService, ObjectsAddService) {
        function _init() {
            $scope.objectCreator = {};
            _reloadObject();


        }

        $scope.onValid = function () {
            if (ObjectsAddService.isValid($scope.objectCreator)) {
                ObjectsAddService.add($scope.objectCreator, function (err, response) {
                    _init();
                });
            }
        };

        function _reloadObject() {
            ObjectsService.getObjects(function (err, objs) {
                $scope.objects = objs;

                $scope.treeObjects = ObjectsService.convertToTree($scope.objects);
            });
        }

        $scope.onIconSelected = function (icon) {
            $scope.objectCreator.icon = icon;
        };

        _init();
    }
})();