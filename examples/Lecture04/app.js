/*
(...)(...);

This form is an IIEF, immediately invoked function expression.
*/


(function() {

    'use strict';

    angular.module("myFirstApp", [])

    .controller('MyFirstController', function($scope) {
        $scope.name = "Developer";
        $scope.sayHello = function() {
            return "Hello Coursera!";
        }
    });
})();
