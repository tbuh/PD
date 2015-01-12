// Install the angularjs.TypeScript.DefinitelyTyped NuGet package to resolve the reference paths,
// then adjust the path value to be relative to this file
/// <reference path='Scripts/typings/angularjs/angular.d.ts'/>
/// <reference path='Scripts/typings/angularjs/angular-resource.d.ts'/>

interface IApp extends ng.IModule { }

// Create the module and define its dependencies.
var PDWebApp: IApp = angular.module('PDWebApp', [
    // Angular modules 
    'ngResource',       // $resource for REST queries
    'ngAnimate',        // animations
    'ngRoute'           // routing

    // Custom modules 

    // 3rd Party Modules
]);

// Execute bootstrapping code and any dependencies.
PDWebApp.run(['$q', '$rootScope', ($q, $rootScope) => {

}]);
