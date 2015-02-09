'use strict';
app.factory('employeesService', ['$http', 'ngAuthSettings', function ($http, ngAuthSettings) {

    var serviceBase = ngAuthSettings.apiServiceBaseUri;

    var employeesServiceFactory = {};

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
            url: serviceBase + 'api/employees/details/' + employeeId,
            //params: employeeId,
            method: 'GET'
        }).then(function (results) {
            return results;
        });        
    };




    var _updateEmployee = function (employeeId, employee) {
        return $http({
            url: serviceBase + 'api/employees/' + employeeId,
            data: employee,
            method: 'PUT'
        }).then(function (results) {
            return results;
        });
    };


    employeesServiceFactory.getEmployees = _getEmployees;
    employeesServiceFactory.getEmployeeById = _getEmployeeById;
    employeesServiceFactory.updateEmployee = _updateEmployee;

    return employeesServiceFactory;

}]);