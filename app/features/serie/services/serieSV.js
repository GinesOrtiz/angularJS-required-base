(function () {
    'use strict';

    define(['angular'], function (angular) {
        angular.module('reqApp.services')
            .service('serieSV', function ($http) {

                this.requestGET = function (onSuccess, onError) {
                    $http({
                        url: utils.getUrlRegex('serie', ['615']),
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