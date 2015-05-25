(function () {
    define([], function () {
        return ['$scope', 'exampleSV',
            function ($scope, exampleSV) {
                exampleSV.requestGET(
                    function onSuccess(data) {
                        console.log(data);
                        $scope.responseData = data;
                    },
                    function onError() {

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