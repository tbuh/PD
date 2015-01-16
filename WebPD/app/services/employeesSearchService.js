'use strict';
app.factory('employeesSearchService', ['$http', 'ngAuthSettings', function ($http, ngAuthSettings) {

    var serviceBase = ngAuthSettings.apiServiceBaseUri;

    var employeesSearchServiceFactory = {};

    var _getEmployees = function (searchParams) {

        return $http({
            url: serviceBase + 'api/employees/',
            params: searchParams,
            method: 'GET'
        }).then(function (results) {
            return results;
        });
    };

    employeesSearchServiceFactory.getEmployees = _getEmployees;

    return employeesSearchServiceFactory;

}]);