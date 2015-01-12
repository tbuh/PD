// Update the reference to app1.ts to be that of your module file.
// Install the angularjs.TypeScript.DefinitelyTyped NuGet package to resolve the .d.ts reference paths,
// then adjust the path value to be relative to this file
/// <reference path="app.ts" />
/// <reference path='/Scripts/typings/angularjs/angular.d.ts'/>
/// <reference path='/Scripts/typings/angularjs/angular-resource.d.ts'/>

var CustomerList = (function () {
    function CustomerList($scope, $http, $resource) {
        var _this = this;
        this.$scope = $scope;
        this.$http = $http;
        this.$resource = $resource;
        $scope.greeting = "Hello";
        $scope.changeGreeting = function () {
            return _this.changeGreeting();
        };
    }
    CustomerList.prototype.changeGreeting = function () {
        this.$scope.greeting = "Bye";
    };
    CustomerList.controllerId = "CustomerList";
    return CustomerList;
})();

// Update the app1 variable name to be that of your module variable
app.controller(CustomerList.controllerId, [
    '$scope', '$http', '$resource', function ($scope, $http, $resource) {
        return new CustomerList($scope, $http, $resource);
    }
]);
//# sourceMappingURL=CustomerList.js.map
