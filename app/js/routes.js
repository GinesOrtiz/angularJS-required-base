(function () {
    'use strict';
    define(['angular', 'app'], function (angular, app) {
        return app.config(['$routeProvider', '$locationProvider',
            function ($routeProvider, $locationProvider) {
                //	$locationProvider.html5Mode(true);
                $routeProvider.when('/', {
                    templateUrl: 'app/features/example/views/example.html',
                    controller: 'exampleCtrl'
                });

                $routeProvider.otherwise({
                    templateUrl: 'app/features/example/views/example.html',
                    controller: 'exampleCtrl'
                });
            }
        ]);
    });
})();