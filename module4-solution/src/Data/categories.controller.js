(function() {
    'use strict';

    angular.module('data')
        .controller('CategoriesController', Category);



    Category.$inject = ['response'];

    function Category(response) {
        var controller = this;
        controller.items = response.data;

        console.log("items",response.data);


    }


})();
