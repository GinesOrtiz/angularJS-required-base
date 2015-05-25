(function () {
    'use strict';

    define(['angular'], function (angular) {
        angular.module('reqApp.services.exampleSV', [])
            .service('exampleSV', function ($http) {

                this.requestGET = function (onSuccess, onError) {
                    $http({
                        url: utils.getUrlRegex('exampleUrl', ['752']),
                        method: 'GET',
                        timeout: utils.webServicesTimeout
                    }).success(function (data) {
                        onSuccess(data);

                    }).error(function (errMsg) {
                        onError(errMsg);
                    });
                };
            });
    });
}());