var portControllers = angular.module('portControllers', []);

portControllers.controller('BerthController', function ($scope, $http) {
    $http.get("./getAllBerths")
        .success(function (response) {
            $scope.Berths = response;
        });
});


portControllers.controller('UserController', function ($scope, $http) {
    $http.get("./users/getAllUsers")
        .success(function (response) {
            $scope.Users = response;
        });
    $scope.response = {};
    $scope.data = {};
    $scope.formData = {};
    // when submitting the add form, send the text to the node API
    $scope.registerUser = function() {
        $http.post('./users/updateUser', $scope.formData)
            .success(function (data, response) {
                $scope.formData = {}; // clear the form so our user is ready to enter another
                console.log(data);
                console.log(response);
                $scope.response = response;
                $scope.data = data;
				$http.get("./users/getAllUsers")
        			.success(function (response) {
            			$scope.Users = response;
        			});
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };
    $scope.authenticateUser = function() {
        $http.post('./users/authenticate', $scope.formData)
            .success(function (data, response) {
                console.log(data);
                console.log(response);
                $scope.response = response;
                $scope.data = data;
                //if login was successfull add received token to all headers
                if(data.success){
                    $http.defaults.headers.common = { token : data.token }
                }
                $http.get("./users/getAllUsers")
                    .success(function (response) {
                        $scope.Users = response;
                    });
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };
});

