(function() {
    'use strict';

    angular.module('MenuApp')
        .config(RoutesConfig);

    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

    function RoutesConfig($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/');


        $stateProvider

            .state('home', {
            url: '/',
            templateUrl: 'src/Templates/home.template.html'
        })

        .state('categories', {
            url: '/categories',
            templateUrl: 'src/Templates/main-categories.template.html',
            controller: 'CategoriesController as category',
            resolve: {
                response: ['MenuDataService', function(MenuDataService) {
                    return MenuDataService.getAllCategories();
                }]
            }
        })

        .state('categoryItems', {
            url: '/items-of-the-category/{name}',
            templateUrl: 'src/Templates/main-items.template.html',
            controller: 'ItemsController as menuItem',
            resolve: {
                response: ['$stateParams', 'MenuDataService', function($stateParams, MenuDataService) {
                    console.log("using name", $stateParams.name2);
                    console.log("using short_name", $stateParams.name);
                    return MenuDataService.getItemsForCategory($stateParams.name);
                }]
            }
        });



    }


})();
