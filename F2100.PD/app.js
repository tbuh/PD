// Install the angularjs.TypeScript.DefinitelyTyped NuGet package to resolve the reference paths,
// then adjust the path value to be relative to this file
/// <reference path='Scripts/typings/angularjs/angular.d.ts'/>
/// <reference path='Scripts/typings/angularjs/angular-resource.d.ts'/>

// Create the module and define its dependencies.
var PDWebApp = angular.module('PDWebApp', [
    'ngResource',
    'ngAnimate',
    'ngRoute'
]);

// Execute bootstrapping code and any dependencies.
PDWebApp.run([
    '$q', '$rootScope', function ($q, $rootScope) {
    }]);
//# sourceMappingURL=app.js.map
