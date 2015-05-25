(function () {
    'use strict';

    define(['angular'], function (angular) {

        /* Filters */

        angular.module('reqApp.filters', [])
            .filter('interpolate', ['version', function (version) {
                return function (text) {
                    return String(text).replace(/\%VERSION\%/mg, version);
                };
            }])

            .filter('orderObjectBy', function () {
                return function (input, attribute) {
                    if (!angular.isObject(input)) return input;

                    var array = [];
                    for (var objectKey in input) {
                        array.push(input[objectKey]);
                    }

                    array.sort(function (a, b) {
                        a = parseInt(a[attribute], 10);
                        b = parseInt(b[attribute], 10);
                        return a - b;
                    });
                    return array;
                };
            })

            .filter('orderByFirstChild', function () {
                return function (initArray, attribute) {

                    var object_var = attribute.split('.');

                    initArray.forEach(function (e) {
                        e._order = e[object_var[0]][object_var[1]];
                    });

                    initArray.sort(function (a, b) {
                        if (a._order < b._order)
                            return -1;
                        if (a._order > b._order)
                            return 1;
                        return 0;
                    });

                    initArray.forEach(function (e) {
                        delete e._order;
                    });

                    return initArray;
                };
            })

            .filter('unsafe', function ($sce) {
                return $sce.trustAsHtml;
            })

            .filter('slice', function () {
                return function (arr, start, end) {
                    if (!arr || !arr.length) {
                        return;
                    }
                    return arr.slice(start, end);
                };
            })

            .filter('filterSingleParam', function () {
                return function (scope, variable) {
                    var log = [];
                    angular.forEach(scope, function (value) {
                        this.push(value[variable]);
                    }, log);
                    return log;
                };
            })

            .filter('matchWith', function () {
                return function (scope, array, variable, aux) {
                    var items = {
                        array: array,
                        out: []
                    };
                    angular.forEach(scope, function (value) {
                        if (this.array.indexOf(value[variable]) > -1) {
                            if (typeof aux !== 'undefined') {
                                value[aux] = true;
                            } else {
                                value.active = true;
                            }
                        }
                        this.out.push(value);
                    }, items);
                    return items.out;
                };
            })

            .filter('resetParam', function () {
                return function (scope, params) {
                    scope.forEach(function (value) {
                        params.forEach(function (param) {
                            value[param] = false;
                        });
                    });
                    return scope;
                };
            })

            .filter('limitFromTo', function () {
                return function (items, begin, end) {
                    if (angular.isDefined(items)) {
                        return items.slice(begin, end);
                    }

                };
            })

            .filter('htmlToPlaintext', function () {
                return function (text) {
                    return String(text).replace(/<[^>]+>/gm, '');
                };
            })

            .filter('cut', function () {
                return function (value, wordwise, max, tail) {
                    if (!value) return '';

                    max = parseInt(max, 10);
                    if (!max) return value;
                    if (value.length <= max) return value;

                    value = value.substr(0, max);
                    if (wordwise) {
                        var lastspace = value.lastIndexOf(' ');
                        if (lastspace != -1) {
                            value = value.substr(0, lastspace);
                        }
                    }

                    return value + (tail || ' …');
                };
            })

            .filter('tel', function () {
                return function (phoneNumber) {
                    if (!phoneNumber)
                        return phoneNumber;

                    return formatLocal('ES', phoneNumber);
                };
            })

            .filter('formatRangeTime', function() {
                return function(timeInSeconds) {
                    var totalMinutes = timeInSeconds / 60;
                    var hours = parseInt((totalMinutes / 60), 10);
                    var minutes = totalMinutes % 60;
                    if (minutes === 0) {
                        minutes = '00';
                    }
                    return hours + ':' + minutes;
                };
            });
    });
}());