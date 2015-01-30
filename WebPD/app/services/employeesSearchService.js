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


    var _getEmployeeById = function (employeeId) {

        return $http({
            url: serviceBase + 'api/employees/' + employeeId,
            //params: employeeId,
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
    employeesSearchServiceFactory.getEmployeeById = _getEmployeeById;
    employeesSearchServiceFactory.editEmployee = _editEmployee;

    return employeesSearchServiceFactory;

}]);