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
        toBuy.removeItem = function (itemIndex) {
            ShoppingListCheckOffService.removeItem(itemIndex) {

            }
        };


    };

    function AlreadyBoughtController (ShoppingListCheckOffService) {

    };

    function ShoppingListCheckOffService () {
        var service = this;

        service.itemsToBuy = [
            { name: "cookies", quantity: 10 },
            { name: "coke", quantity: 5 }
            ];
        service.itemsBought = [];

        service.removeItem = function (itemIndex) {

            service.itemsToBuy.splice(itemIndex, 1);
        };

        service.addItem = function (itemName, quantity) {
            var item = {
                name: itemName,
                quantity: quantity
            };

            service.itemsBought.push(item);
        }
    };


})();