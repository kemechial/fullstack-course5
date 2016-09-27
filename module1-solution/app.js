(function() {
    'use strict';

    angular.module('lunchApp', [])
        .controller('LunchController', LunchController);

    LunchController.$inject = ['$scope'];

    function LunchController($scope) {

        $scope.output = "";
        $scope.lunchList = "";

        $scope.analyze = function() {
            if ($scope.lunchList) {
                var input_array = $scope.lunchList.split(',');
                if (input_array.length > 3) {
                    $scope.output = "Too much!";
                } else {
                    $scope.output = "Enjoy!";
                }
            } else {
                $scope.output = "Please enter data first";
            }
        };

    }

})();
