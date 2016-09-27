/*(function () {
'use strict';

angular.module('DIApp', [])
.controller('DIController', ['$scope', '$filter', DIController]);

function DIController ($scope, $filter) {
  $scope.name = "Yaakov";

  $scope.upper = function () {
    var upCase = $filter('uppercase');
    $scope.name = upCase($scope.name);
  };
}

})();

By using string literals like '$scope', '$filter' we tell the javascript minifier that,
 our function is going to take $scoe and $filter as arguments and not to take them out.

We can also define our controller function directly:

(function() {
    'use strict';

    angular.module('DIApp', [])
        .controller('DIController', ['$scope', '$filter', function($scope, $filter) {
            $scope.name = "Yaakov";

            $scope.upper = function() {
                var upCase = $filter('uppercase');
                $scope.name = upCase($scope.name);
            };
        }]);

})();

Another way, which is one step better, is to leave without array contract
 and attach an extra property to the controller function value itself:

(function () {
'use strict';

angular.module('DIApp', [])
.controller('DIController', DIController);

DIController.$inject=['$scope','$filter'];

function DIController ($scope, $filter) {
  $scope.name = "Yaakov";

  $scope.upper = function () {
    var upCase = $filter('uppercase');
    $scope.name = upCase($scope.name);
  };
}

})();

*/

!function(){"use strict";function e(e,n){e.name="Yaakov",e.upper=function(){var o=n("uppercase");e.name=o(e.name)}}angular.module("DIApp",[]).controller("DIController",e),e.$inject=["$scope","$filter"]}();
