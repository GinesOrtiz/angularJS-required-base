(function () {
    'use strict';

    define(['angular'], function (angular) {

        angular.module('reqApp.directives')
            .directive('filmCard', function () {
                return {
                    transclude : true,
                    restrict: 'E',
                    templateUrl: '/app/features/movie/views/_movieCard.html'
                };
            });

    });
}());