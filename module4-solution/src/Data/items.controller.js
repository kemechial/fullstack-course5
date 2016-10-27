(function() {
    'use strict';

    angular.module('data')
        .controller('ItemsController', Item);



    Item.$inject = ['$stateParams','response'];

    function Item($stateParams,response) {

        var controller = this;
        controller.items = response.data.menu_items;
        controller.name = $stateParams.name;
        controller.shortName = $stateParams.shortName;

    }


})();
