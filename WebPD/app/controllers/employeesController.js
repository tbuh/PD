'use strict';
app.controller('employeesController', ['$scope', 'employeesSearchService', '$location', function ($scope, employeesSearchService, $location) {

    $scope.employees = [];
    $scope.searchParams = { firstName: '', lastName: '', city: '', country: '', extension: '' };

    $scope.search = function () {
        loadUsers();
    };

    $scope.reset = function () {
        $scope.searchParams = { firstName: '', lastName: '', city: '', country: '', extension: '' };
        $scope.employees = [];
    };

    function loadUsers() {
        $scope.employees = null;
        employeesSearchService.getEmployees($scope.searchParams).then(function (results) {
            $scope.employees = results.data;
        });
    }

    $scope.selectEmployee = function (employee) {
        $location.path("/employeeDeteil/" + employee.employeeID);
    };

}]);

app.controller('employeeEditController', ['$scope', 'employeesSearchService', '$routeParams', function ($scope, employeesSearchService, $routeParams) {

    $scope.employeeID = $routeParams.id;
    $scope.editEmployee = { firstName: '', lastName: '', city: '', country: '', extension: '' };

    function getById(employeeId) {
        employeesSearchService.getEmployeeById(employeeId).then(function (result) {
            $scope.editEmployee = result.data;
        },
         function (response) {
             var errors = [];
             for (var key in response.data.modelState) {
                 for (var i = 0; i < response.data.modelState[key].length; i++) {
                     errors.push(response.data.modelState[key][i]);
                 }
             }
             $scope.message = "Failed to register user due to:" + errors.join(' ');
             console.log(errors);
             console.log($scope.message);
         })
    };

    getById($scope.employeeID);


    $scope.updateEmployee = function () {
        var promisePutEmployee = employeesSearchService.updateEmployee($routeParams.id, $scope.editEmployee);
        promisePutEmployee.then(function (result) {
            window.location.href = "#/employees";
        });
    };
}]);

app.controller('employeeDeteilController', ['$scope', 'employeesSearchService', '$routeParams', function ($scope, employeesSearchService, $routeParams) {

    $scope.employeeID = $routeParams.id;
    function getById(employeeId) {
        employeesSearchService.getEmployeeById(employeeId).then(function (result) {
            $scope.EmployeeDeteil = result.data;
        },
         function (response) {
             var errors = [];
             for (var key in response.data.modelState) {
                 for (var i = 0; i < response.data.modelState[key].length; i++) {
                     errors.push(response.data.modelState[key][i]);
                 }
             }
             $scope.message = "Failed to register user due to:" + errors.join(' ');
             console.log(errors);
             console.log($scope.message);
         })
    };

    getById($scope.employeeID);




}]);