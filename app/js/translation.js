(function () {
    'use strict';

    define(['angular'], function (angular) {
        angular.module('reqApp.translation', [])
            .service('translationService', function ($resource) {
                this.getTranslation = function ($scope, language) {
                    var languageFilePath = 'app/resources/translations/' + language + '.json';
                    $resource(languageFilePath).get(
                        function (data) {
                            $scope.translation = data;
                        }
                    );
                };
            });

    });
}());