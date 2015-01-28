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


    var _getEmployeesById = function (employee) {

        return $http({
            url: serviceBase + 'api/employees/',
            params:employee,
            method: 'GET'
        }).then(function (results) {
            return results;
        });
    };




    var _editEmployee = function (id, employee) {
        return $http({
            url: serviceBase + 'api/employees/' + employee,
            params: 'employee',
            method: 'PUT'
        }).then(function (results) {
            return results;
        });
    };


    employeesSearchServiceFactory.getEmployees = _getEmployees;
    employeesSearchServiceFactory.getEmployeesById = _getEmployeesById;
    employeesSearchServiceFactory.editEmployee = _editEmployee;

    return employeesSearchServiceFactory;

}]);