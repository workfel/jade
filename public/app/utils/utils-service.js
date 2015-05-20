/**
 * Created by johan on 20/05/2015.
 */
(function () {
    'use strict';
    angular
        .module('jadeApp')
        .service('UtilsService', UtilsService);

    UtilsService.$inject = ['$http', 'Slug'];

    function UtilsService($http, Slug) {


        this.getIconClass = function (callback) {
            $http.get('/resources').success(function (data, status) {
                callback(null, data[0]);
            });
        };

        this.slug = function (str) {
            return Slug.slugify(str);
        }
    }
})();