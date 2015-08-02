(function () {
    'use strict';
    define([
        'utils',
        '/app/features/movie/services/movieSV.js',
        '/app/features/movie/directives/movieDR.js'
    ], function () {
        var featureConfig = {
            folder: 'movie',
            controllers: [
                {
                    name: 'movieCT',
                    stylePath : 'movie'
                }
            ],
            routes: [
                {
                    url: '/movie',
                    tpl: 'movie',
                    ctrl: 'movieCT'
                }
            ]
        };

        setFeatureConfig(featureConfig);
    });
})();