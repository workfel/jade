/**
 * Created by johan on 20/05/2015.
 */
(function () {
    'use strict';
    angular
        .module('jadeApp')
        .service('WidgetAddService', WidgetAddService);

    WidgetAddService.$inject = ['$http', 'UtilsService'];

    function WidgetAddService($http, UtilsService) {

        this.isValid = function (widgetCreator) {
            return true;
        }

        this.addWidget = function (widgetModel, callback) {
            widgetModel.id = UtilsService.slug(widgetModel.name);

            $http.post('/widgets/add', widgetModel).success(function (data, status) {
                callback(null, data);
            }).error(function (data, status) {
                callback(data);
            });
        }


    }
})();