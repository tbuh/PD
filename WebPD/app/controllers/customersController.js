'use strict';
app.controller('customersController', ['$scope', 'customersService', function ($scope, customersService) {

    $scope.customers = [];

    customersService.getCustomers().then(function (results) {

        $scope.customers = results.data;
        $scope.myData = [
    {
        "firstName": "Cox",
        "lastName": "Carney",
        "company": "Enormo",
        "employed": true
    },
    {
        "firstName": "Lorraine",
        "lastName": "Wise",
        "company": "Comveyer",
        "employed": false
    },
    {
        "firstName": "Nancy",
        "lastName": "Waters",
        "company": "Fuelton",
        "employed": false
    }
        ];

    }, function (error) {
        //alert(error.data.message);
    });


}]);