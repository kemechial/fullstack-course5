(function() {
    'use strict';

    angular.module('ShoppingListCheckOff', [])
        .controller('ToBuyShoppingController', ShoppingController)
        .controller('AlreadyBoughtShoppingController', BoughtController)
        .service('DataService', ShoppingService);

    ShoppingController.$inject = ['DataService'];

    function ShoppingController(DataService) {
        var shopping = this;

        this.items = DataService.getItemsToBuy();
        this.buyItem=function (index) {
            DataService.buy(index);
        };


    }

    BoughtController.$inject = ['DataService'];

    function BoughtController(DataService) {
        var bought = this;

        this.items = DataService.getItemsBought();


    }

    function ShoppingService() {
        var service = this;

        var toBuy = [{
            quantity: 10,
            name: "Cookie"
        }, {
            quantity: 5,
            name: "Chocolate"
        }, {
            quantity: 4,
            name: "Biscuit"
        }];

        var bought = [];

        service.getItemsToBuy = function() {
          console.log(toBuy);

            return toBuy;
        };

        service.getItemsBought = function() {

            return bought;
        };

        service.buy=function(itemIndex) {

          bought.push(toBuy.splice(itemIndex,1)[0]);

        }


    }


})();
