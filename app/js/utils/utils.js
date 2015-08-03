var constants = {
    url_base: 'http://api.misly.es'
};

var url_app = {
    movie: '/movie/info/!1!/en/all.js',
    serie: '/serie/info/!1!/en/all.js'
};

var utils =
{
    webServicesTimeout: 40000, //20 segundos

    getURL: function (partialUrl) {
        return constants.url_base + url_app[partialUrl];
    },

    getUrlRegex: function (partialUrl, objMap) {
        var str = constants.url_base + url_app[partialUrl];
        var regex_f = '';
        var match_obj = {};

        objMap.forEach(function (e, i) {
            var i_ = '!' + (i + 1) + '!';
            regex_f += i_;
            match_obj[i_] = e;
            if (i < objMap.length - 1) {
                regex_f += '|';
            }
        });

        var regex_t = new RegExp(regex_f, "gi");

        return str.replace(regex_t, function (matched) {
            return match_obj[matched];
        });
    }
};

var routesAvaliable = [];
var defineControllers = [];

var setFeatureConfig = function (featureConfig) {

    featureConfig.routes.forEach(function (route) {
        route.folder = featureConfig.folder;
    });
    routesAvaliable = routesAvaliable.concat(featureConfig.routes);

    featureConfig.controllers.forEach(function (controller) {
        defineControllers.push({
            stylePath: controller.stylePath,
            name: controller.name,
            path: '/app/features/' + featureConfig.folder + '/controllers/' + controller.name + '.js'
        });
    });
};