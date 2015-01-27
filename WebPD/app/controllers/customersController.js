'use strict';
app.controller('customersController', ['$scope', 'customersService', 'ngDialog', function ($scope, customersService, ngDialog) {

    $scope.customers = [];

    $scope.prms = { customerID: '', companyName: '', country: '' };

    $scope.search = function () {
        $scope.prmsStr = $scope.prms.customerID + '|' + $scope.prms.companyName + '|' + $scope.prms.country;
        customersService.getCustomers($scope.prmsStr).then(function(results) {
            $scope.customers = results.data;
        }, function (error) {
            console.log('failure loading customer', error);
        });
    }

    $scope.search();

    $scope.clear = function () {
        $scope.prms = { customerID: '', companyName: '', country: '' };
        $scope.search();
    }

    $scope.gridOptions = {
        data: 'customers',
        enableColumnResizing: true,
        columnDefs: [
            { name: 'customerID', width: '5%', displayName: 'ID', cellTemplate: '<div class="ui-grid-cell-contents"><span>{{COL_FIELD}}</span></div>' },
            { name: 'companyName', width: '15%', displayName: 'Company name' },
            { name: 'contactName', width: '10%', displayName: 'Contact name' },
            { name: 'contactTitle', width: '5%', displayName: 'Contact title' },
            { name: 'address', width: '15%', displayName: 'Address' },
            { name: 'city', width: '10%', displayName: 'City' },
            { name: 'region', width: '5%', displayName: 'Region' },
            { name: 'postalCode', width: '5%', displayName: 'Postal code' },
            { name: 'country', width: '5%', displayName: 'Country' },
            { name: 'phone', width: '5%', displayName: 'Phone' },
            { name: 'fax', width: '5%', displayName: 'Fax' },
            { name: 'Editing', width: '5%', cellTemplate: '<div class="ui-grid-cell-contents"><input type="button" ng-click="search()" value="Edit" class="btn btn-md btn-link" /></div>' }
        ]
    };

    $scope.ddSelectOptions = [
        {
            text: '',
            value: ''
        },
        {
            text: 'Denmark',
            value: 'Denmark value'
        },
        {
            text: 'Sweden',
            value: 'Sweden value'
        },
        {
            text: 'Norway',
            value: 'Norway value'
        }
    ];

    $scope.countrySelected = {};

    $scope.open = function () {
        ngDialog.open({ template: 'ngDialogTemplate', controller: 'InsideCtrl', data: { foo: 'some data' }, className: 'ngdialog-theme-plain' });
    };
}]);

app.controller('InsideCtrl', ['$scope', 'customersService', 'ngDialog', function ($scope, customersService, ngDialog) {
    $scope.customer = { customerID: '', companyName: '', contactName: '', contactTitle: '', address: '', city: '', region: '', postalCode: '', country: '', phone: '', fax: '' };
    $scope.saveCustomer = function () {
        customersService.saveCustomer($scope.customer).then(function (results) {
            $scope.customers.push(results.data);
            ngDialog.close();
        }, function (error) {
            console.log('failure adding customer', error);
        });
    };
    $scope.closeDialog = function () {
        ngDialog.close();
    };
}]);
