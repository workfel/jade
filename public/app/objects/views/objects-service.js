/**
 * Created by johan on 20/05/2015.
 */
(function () {
    'use strict';
    angular
        .module('jadeApp')
        .service('ObjectsService', ObjectsService);

    ObjectsService.$inject = ['$http', 'UtilsService'];

    function ObjectsService($http, UtilsService) {

        this.getObjects = function (callback) {
            $http.get('/objects').success(function (data, status) {
                callback(null, data);
            }).error(function (data, status) {
                callback(data);
            });
        };

        this.convertToTree = function (objects) {
            var tree = [];

            ////make a root
            angular.forEach(objects, function (obj, key) {

                if (obj.parent === null || angular.isUndefined(obj.parent)) {
                    obj.child = [];
                    tree.push(obj);
                }

            });
            //
            angular.forEach(tree, function (item) {
                angular.forEach(objects, function (obj, key) {
                    if (obj.parent === item.id) {
                        item.child.push(obj);
                    }
                });
            });


            //TODO : make a function tree
            //third level
            angular.forEach(tree, function (item) {
                angular.forEach(item.child, function (child) {
                    angular.forEach(objects, function (obj, key) {
                        if (obj.parent === child.id) {
                            if (angular.isUndefined(child.child))
                                child.child = [];
                            child.child.push(obj);
                        }
                    });
                });

            });

            //console.log(tree);
            return tree;
        };


        //
        //function unflatten(array, parent, tree) {
        //
        //    tree = typeof tree !== 'undefined' ? tree : [];
        //    parent = typeof parent !== 'undefined' ? parent : {id: array[0].id};
        //
        //    var children = _.filter(array, function (child) {
        //        return child.parent == parent.id;
        //    });
        //
        //    if (!_.isEmpty(children)) {
        //        if (parent.id == 0) {
        //            tree = children;
        //        } else {
        //            parent['children'] = children
        //        }
        //        _.each(children, function (child) {
        //            unflatten(array, child)
        //        });
        //    }
        //
        //    return tree;
        //}

    }


})();