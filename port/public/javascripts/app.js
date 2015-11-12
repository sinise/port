var app = angular.module('myApp', []);
app.controller('customersCtrl', function($scope, $http) {
    $http.get("http://localhost/getAllBerths")
        .success(function (response) {$scope.Berths = response;});
});
