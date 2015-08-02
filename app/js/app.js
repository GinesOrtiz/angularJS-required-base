(function () {
    'use strict';

    define([
        'angular',
        'config'
    ], function (angular, filters, controllers) {
        var app = angular.module('reqApp', [
            'ngAnimate',
            'ngResource',
            'ngSanitize',
            'webStorageModule',
            'reqApp.config',
            'reqApp.filters',
            'reqApp.services',
            'reqApp.translation',
            'reqApp.directives',
            'reqApp.controllers'
        ]);

        app.run(['$rootScope', 'webStorage', '$location', 'translationService', '$http',
            function ($root, webStorage, $location, translationService, $http) {

                $root.$on('$routeChangeStart', function (e, curr, prev) {

                });

                setLanguage($root, translationService);
                makeTempStoratge(webStorage, $root);
            }
        ]);

        var setLanguage = function ($scope, translationService) {
            var lang = angular.isDefined(navigator.language) ? navigator.language.replace('-', '_') : 'en_US';
            translationService.getTranslation($scope, lang);
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