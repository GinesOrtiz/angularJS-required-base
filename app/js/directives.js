(function () {
    'use strict';
    define(['angular', 'services'], function (angular, services) {

        angular.module('reqApp.directives', [])
            .directive('appVersion', ['version',
                function (version) {
                    return function (scope, elm, attrs) {
                        elm.text(version);
                    };
                }
            ])

    });
})();