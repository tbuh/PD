'use strict';
app.factory('customersService', ['$http', 'ngAuthSettings', function ($http, ngAuthSettings) {

    var serviceBase = ngAuthSettings.apiServiceBaseUri;

    var customersServiceFactory = {};

    var _getCustomers = function (prmsStr) {
        return $http.get(serviceBase + "api/customers/" + prmsStr).then(function (results) {
            return results;
        });
    };

    //Create new record
    var _saveCustomer = function (customer) {
        return $http.post(serviceBase + "/api/customers", customer).success(function (data, status, headers) {
            console.log('customer added');
        });
    }

    //Delete the record
    var _deleteCustomer = function (customerID) {
        return $http.delete(serviceBase + "api/customers/" + customerID).then(function (results) {
            return results;
        });
    }

    customersServiceFactory.getCustomers = _getCustomers;
    customersServiceFactory.saveCustomer = _saveCustomer;
    customersServiceFactory.deleteCustomer = _deleteCustomer;

    return customersServiceFactory;

}]);