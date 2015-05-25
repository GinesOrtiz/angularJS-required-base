(function () {
    'use strict';

    define([
        'angular',
        'controllers',
        'filters',
        'services',
        'directives',
        '../features/example/services/exampleSV'
    ], function (angular, filters, controllers) {
        var app = angular.module('reqApp', [
            'ngRoute',
            'ngAnimate',
            'ngResource',
            'ngSanitize',
            'webStorageModule',
            'reqApp.filters',
            'reqApp.services',
            'reqApp.directives',
            'reqApp.services.exampleSV',
            'reqApp.controllers'
        ]);


        app.config(function ($compileProvider, $httpProvider) {
            $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|tel):/);

            $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';
            $httpProvider.defaults.transformRequest = function(data) {
                if (data === undefined) {
                    return data;
                }
                return $.param(data);
            };
        });


        app.run(['$rootScope', 'webStorage', '$location', 'translationService', '$http',
            function ($root, webStorage, $location, translationService, $http) {

                $root.$on('$routeChangeStart', function (e, curr, prev) {

                });

                //setLanguage($root, translationService);
                makeTempStoratge(webStorage, $root);
            }
        ]);

        var setLanguage = function ($scope, translationService) {
            var successCallback = function (language) {
                $scope.locale = language.value.replace('-', '_');
                $scope.language = $scope.locale.split('_')[0];
                translationService.getTranslation($scope, $scope.language,

                    function onErrorLoadingLang() { //language not supported -> set english by default
                        successCallback({
                            'value': 'es-ES'
                        });
                    });
            };

            if (navigator.globalization) {
                var errorCallback = function (errMsg) {
                    console.log(errMsg);
                };
                successCallback({
                    'value': 'es-ES'
                });
                //navigator.globalization.getPreferredLanguage(successCallback, errorCallback);

            } else { //for desktop
                successCallback({
                    'value': 'es-ES'
                });
            }
        };

        var makeTempStoratge = function (webStorage, $rootScope) {
            $rootScope.tempVariable = [];

            $rootScope.saveTemp = function (variable, content) {
                $rootScope.tempVariable[variable] = content;
            };

            $rootScope.getTemp = function (variable) {
                return angular.isDefined($rootScope.tempVariable[variable]) ? $rootScope.tempVariable[variable] : null;
            };

            $rootScope.removeTemp = function (variable) {
                delete $rootScope.tempVariable[variable];
            };
        };

        return app;
    });
}());