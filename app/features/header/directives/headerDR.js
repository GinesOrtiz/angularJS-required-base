(function () {
    'use strict';

    define(['angular'], function (angular) {
        angular.module('reqApp.directives')
            .directive('header', function () {
                return {
                    restrict: 'E',
                    templateUrl: '/app/features/header/views/_header.html'
                };
            });

    });
}());