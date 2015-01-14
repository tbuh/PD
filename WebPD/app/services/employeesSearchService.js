'use strict';
app.factory('employeesSearchService', ['$http', 'ngAuthSettings', function ($http, ngAuthSettings) {

    var serviceBase = ngAuthSettings.apiServiceBaseUri;

    var employeesSearchServiceFactory = {};

    var _getEmployees = function () {
        var id = Math.floor((Math.random() * 100) + 1);
        return $http.get(serviceBase + 'api/employees/').then(function (results) {
            return results;
        });
    };

    employeesSearchServiceFactory.getEmployees = _getEmployees;

    return employeesSearchServiceFactory;

}]);