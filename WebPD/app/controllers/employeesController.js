'use strict';
app.controller('employeesController', ['$scope', 'employeesSearchService', function ($scope, employeesSearchService) {

    $scope.employees = [];
    $scope.searchParams = { firstName: '', lastName: '', city: '', country: '', extension: '' };

    $scope.search = function () {
        loadUsers();
    };

    function loadUsers() {
        $scope.employees = null;
        employeesSearchService.getEmployees($scope.searchParams).then(function (results) {
            $scope.employees = results.data;
        });
    }

}]);