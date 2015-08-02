(function () {
    'use strict';

    define([], function () {
        return ['$scope', 'movieSV',
            function ($scope, movieSV) {
                movieSV.requestGET(
                    function onSuccess(data) {
                        console.log(data);
                        $scope.responseData = data;
                    }
                );

                $scope.getIMG = function (img) {
                    return 'https://image.tmdb.org/t/p/original/' + img;
                };

                $scope.$apply();
            }
        ];
    });
})();