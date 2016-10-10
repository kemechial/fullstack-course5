(function() {
    'use strict';

    angular.module('BindingApp', [])
        .controller('BindingController', BindingController);

    BindingController.$inject = ['$scope'];

    function BindingController($scope) {
        $scope.firstName = "Yaakov";
        //$scope.fullName = ""; after this value is set here, the watcher is removed because of 1-time binding, we comment this out,
        //since it is not yet defined, the watcher is not removed. 

        $scope.showNumberOfWatchers = function() {
            console.log("# of Watchers: ", $scope.$$watchersCount);
        };

        $scope.setFullName = function() {
            $scope.fullName = $scope.firstName + " " + "Chaikin";
        };

        $scope.logFirstName = function() {
            console.log("First name is: ", $scope.firstName);
        };

        $scope.logFullName = function() {
            console.log("Full name is: ", $scope.fullName);
        };
    }

})();
