
var portApp = angular.module('portApp', [
    'ngRoute',
    'portControllers'

]);

portApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
    when('/berths', {
        templateUrl: 'partials/berths.html',
        controller: 'BerthController'
    }).when('/users', {
        templateUrl: 'partials/users.html',
        controller: 'UserController'
    }).when('/addUser', {
        templateUrl: 'partials/addUser.html',
        controller: 'UserController'
    }).when('/authenticate', {
        templateUrl: 'partials/authenticate.html',
        controller: 'UserController'
    }).
    otherwise({
        redirectTo: '/berths'
    });
}]);


