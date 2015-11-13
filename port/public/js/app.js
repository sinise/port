
var portApp = angular.module('portApp', [
    'ngRoute',
    'portControllers'

]);

portApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
    when('/berths', {
        templateUrl: 'partials/berths.html',
        controller: 'BerthController'
    }).
    otherwise({
        redirectTo: '/berths'
    });
}]);