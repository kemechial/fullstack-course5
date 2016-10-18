(function functionName() {
    'use strict';

    angular.module('NarrowItDownApp', [])
        .controller('NarrowItDownController', NarrowController)
        .service('MenuSearchService', MenuService)
        .directive('foundItems', Found)
        .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");


    function Found() {
        var ddo = {
            restrict: 'E', //if we do not restrict, attribute causes multiple directives error
            templateUrl: 'foundItem.html',
            scope: {
                foundItems: '<',
                onRemove: '&'
            }
        };

        return ddo;
    }

    NarrowController.$inject = ['MenuSearchService'];

    function NarrowController(MenuSearchService) {
        var narrow = this;
        narrow.empty = true;

        narrow.find = function() {
            MenuSearchService.getMatchedMenuItems(narrow.search).then(function(val) {
                narrow.found = val;
                narrow.empty = val.length > 0 ? false : true;
            });

        };

        narrow.remove = function(index) {
          narrow.found.splice(index,1);
        };

    }

    MenuService.$inject = ['$http', 'ApiBasePath'];

    function MenuService($http, ApiBasePath) {
        var service = this;

        service.getMatchedMenuItems = function(searchTerm) {
            console.log("search term", searchTerm);
            return $http({
                method: "GET",
                url: (ApiBasePath + "/menu_items.json"),
            }).then(
                function(response) {
                    var foundItems = [];
                    response.data.menu_items.forEach(function(item) {
                        if (item.description.toLowerCase().indexOf(searchTerm) !== -1) {
                            foundItems.push(item);
                        }
                    });

                    return foundItems;
                });
        };
    }



})();
