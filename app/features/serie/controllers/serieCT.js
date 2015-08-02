(function () {
    define([], function () {
        return ['$scope', 'serieSV',
            function ($scope, serieSV) {

                serieSV.requestGET(
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
}());