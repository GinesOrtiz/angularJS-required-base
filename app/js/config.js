(function () {
    'use strict';

    var features = [
        '../features/movie/config',
        '../features/serie/config',
        '../features/header/config'
    ];

    var otherwiseRedirect = '/movie';

    // No edition required

    var definePath = ['angular'].concat(features);

    define(definePath, function (angular) {
        defineControllers.forEach(function (ctrl) {
            angular.module('reqApp.controllers')
                .controller(ctrl.name, ['$scope', '$injector', '$rootScope',
                    function ($scope, $injector, $rootScope) {
                        $rootScope.stylePath = ctrl.stylePath;
                        require([ctrl.path], function (tmpCtrl) {
                            $injector.invoke(tmpCtrl, this, {
                                '$scope': $scope
                            });
                        });
                    }
                ]);
        });

        angular.module('reqApp.config', ['ngRoute'])
            .config(['$routeProvider', '$locationProvider', '$compileProvider', '$httpProvider',
                function ($routeProvider, $locationProvider, $compileProvider, $httpProvider) {
                    $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|tel):/);

                    $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';
                    $httpProvider.defaults.transformRequest = function (data) {
                        if (data === undefined) {
                            return data;
                        }
                        return $.param(data);
                    };

                    routesAvaliable.forEach(function (rt) {
                        $routeProvider.when(rt.url, {
                            templateUrl: '/app/features/' + rt.folder + '/views/' + rt.tpl + '.html',
                            controller: rt.ctrl
                        });
                    });

                    $routeProvider.otherwise({
                        redirectTo: otherwiseRedirect
                    });

                    $locationProvider.html5Mode({
                        enabled: true,
                        requireBase: false
                    });


                }
            ]);

    });


})();


