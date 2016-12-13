(function () {
    'use strict';

    angular.module('ShoppingListCheckOff', [])
    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBoughtController', AlreadyBoughtController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

    ToBuyController.$inject(['ShoppingListCheckOffService']);
    AlreadyBoughtController.$inject(['ShoppingListCheckOffService']);

    function ToBuyController (ShoppingListCheckOffService) {
        var toBuy = this;

        toBuy.items = ShoppingListCheckOffService.itemsToBuy;

        toBuy.moveItem = function (itemIndex) {
            ShoppingListCheckOffService.moveItem(itemIndex, toBuy.items[itemIndex].name, toBuy.items[itemIndex].quantity);
        };


    };

    function AlreadyBoughtController (ShoppingListCheckOffService) {
        var alreadyBought = this;

        alreadyBought.items = ShoppingListCheckOffService.itemsBought;

    };

    function ShoppingListCheckOffService () {
        var service = this;

        service.itemsToBuy = [
            { name: "cookies", quantity: 10 },
            { name: "coke", quantity: 5 }
            ];

        service.itemsBought = [];

        service.moveItem = function (itemIndex, itemName, quantity) {
            var item = {
                name: itemName,
                quantity: quantity
            };

            service.itemsBought.push(item);

            service.itemsToBuy.splice(itemIndex, 1);
        };
    };


})();