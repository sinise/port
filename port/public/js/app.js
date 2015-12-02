
var portApp = angular.module('portApp', [
    'ngStorage',
    'ngRoute',
    'angular-loading-bar',
    'portControllers'
]);

portApp.config(['$routeProvider', '$httpProvider', function($routeProvider, $httpProvider) {
    $routeProvider.
        when('/berths', {
            templateUrl: 'partials/berths.html',
            controller: 'BerthController'
        }).when('/users', {
            templateUrl: 'partials/users.html',
            controller: 'GetUserController'
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



    $httpProvider.interceptors.push(['$q', '$location', '$localStorage', function($q, $location, $localStorage) {
        return {
            'request': function (config) {
                config.headers = config.headers || {};
                if ($localStorage.token) {
                    config.headers.Authorization = 'Bearer ' + $localStorage.token;
                }
                return config;
            },
            'responseError': function(response) {
                if(response.status === 401 || response.status === 403) {
                    $location.path('/authentication');
                }
                return $q.reject(response);
            }
        };
    }]);

}]);


