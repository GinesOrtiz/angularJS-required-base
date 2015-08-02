(function () {
    'use strict';

    define(['angular'], function (angular) {
        angular.module('reqApp.directives')
            .directive('serieCard', function () {
                return {
                    transclude : true,
                    restrict: 'E',
                    templateUrl: '/app/features/serie/views/_serieCard.html'
                };
            });
    });
}());