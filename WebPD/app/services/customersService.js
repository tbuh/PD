﻿'use strict';
app.factory('customersService', ['$http', 'ngAuthSettings', function ($http, ngAuthSettings) {

    var serviceBase = ngAuthSettings.apiServiceBaseUri;

    var customersServiceFactory = {};

    //var _getCustomers = function () {
    //    return $http.get(serviceBase + 'api/customers/').then(function (results) {
    //        return results;
    //    });
    //};

    var _getCustomers = function (prmsStr) {
        return $http.get(serviceBase + "api/customers/" + prmsStr).then(function (results) {
            return results;
        });
    };

    customersServiceFactory.getCustomers = _getCustomers;

    return customersServiceFactory;

}]);