'use strict';
app.controller('employeesController', ['$scope', 'employeesSearchService', function ($scope, employeesSearchService) {

    $scope.employees = [];

    employeesSearchService.getEmployees().then(function (results) {

        $scope.employees = results.data;

    }, function (error) {
        alert(error.data.message + ', ' + error.data.exceptionMessage + ', '+ error.data.stackTrace);
    });

}]);