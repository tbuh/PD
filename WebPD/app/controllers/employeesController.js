'use strict';
app.controller('employeesController', ['$scope', 'employeesSearchService', 'ngDialog', function ($scope, employeesSearchService, ngDialog) {

    $scope.employees = [];
    $scope.searchParams = { firstName: '', lastName: '', city: '', country: '', extension: '' };
    //$scope.editEmployee = { firstName: '123', lastName: '', city: '', country: '', extension: '' };

    $scope.search = function () {
        loadUsers();
    };

    function loadUsers() {
        $scope.employees = null;
        employeesSearchService.getEmployees($scope.searchParams).then(function (results) {
            $scope.employees = results.data;
        });
    }
    function getById(employee) {
        $scope.editEmployee = null;
        employeesSearchService.getEmployeesById(employee).then(function (result) {
            var res = result.data[0];
            $scope.employeeID = res.employeeID;

        })
    };


    $scope.get = getById;

}]);