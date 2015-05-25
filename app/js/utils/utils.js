var constants = {
    url_base: 'http://api.misly.es'
};

var url_app = {
    exampleUrl: '/movie/info/!1!/es/all.js'
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
