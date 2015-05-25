(function () {
    'use strict';

    define(['angular'], function (angular) {
        angular.module('reqApp.services', [])

            .value('version', '0.0.1')

            .service('translationService', function ($resource) {
                this.getTranslation = function ($scope, language, onErrorLoadLanguage) {
                    var languageFilePath = 'app/resources/translations/translations_' + language + '.json';
                    $resource(languageFilePath).get(
                        function (data) {
                            $scope.translation = data;
                        },
                        function (err) {
                            onErrorLoadLanguage();
                        }
                    );
                };
            })

    });
}());