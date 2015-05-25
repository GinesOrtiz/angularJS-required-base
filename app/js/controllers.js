(function () {
    'use strict';

    define(['angular', 'services'], function (angular) {
        return angular.module('reqApp.controllers', [])

            .controller('exampleCtrl', ['$scope', '$injector', '$rootScope',
                function ($scope, $injector, $rootScope) {
                    $rootScope.stylePath = 'example';
                    require(['../features/example/controllers/exampleCtrl'], function (exampleCtrl) {
                        $injector.invoke(exampleCtrl, this, {
                            '$scope': $scope
                        });
                    });
                }
            ])

    });
})();