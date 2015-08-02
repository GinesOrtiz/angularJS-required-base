(function () {
    'use strict';
    define([
        'utils',
        '/app/features/serie/services/serieSV.js',
        '/app/features/serie/directives/serieDR.js'
    ], function () {
        var featureConfig = {
            folder: 'serie',
            controllers: [
                {
                    name: 'serieCT',
                    stylePath : 'serie'
                }
            ],
            routes: [
                {
                    url: '/serie',
                    tpl: 'serie',
                    ctrl: 'serieCT'
                }
            ]
        };

        setFeatureConfig(featureConfig);
    });
})();