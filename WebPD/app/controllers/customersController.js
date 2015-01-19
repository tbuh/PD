'use strict';
app.controller('customersController', ['$scope', 'customersService', 'ngDialog', function ($scope, customersService, ngDialog) {

    $scope.customers = [];

    customersService.getCustomers().then(function (results) {

        $scope.customers = results.data;
        $scope.gridOptions = { data: customers };

    }, function (error) {
        //alert(error.data.message);
    });

    $scope.open = function () {
        ngDialog.open({ template: 'ngDialogTemplate', controller: 'InsideCtrl', data: { foo: 'some data' } });
    };
}]);

app.controller('InsideCtrl', function ($scope, ngDialog) {
    $scope.dialogModel = {
        message: 'message from passed scope'
    };
    $scope.insideDialogMethod = function () {
        //do something
    };
    $scope.closeDialog = function () {
        ngDialog.close();
    };
});
