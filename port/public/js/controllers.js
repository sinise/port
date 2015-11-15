var portControllers = angular.module('portControllers', []);
portControllers.controller('BerthController', function ($scope, $http) {
    $http.get("http://localhost/getAllBerths")
        .success(function (response) {
            $scope.Berths = response;
        });
});
portControllers.controller('UserController', function ($scope, $http) {
    $http.get("http://localhost/getAllBerths")
        .success(function (response) {
            $scope.Berths = response;
            $scope.Title = 'this should be users';
        });
});

