(function () {
    'use strict';

    angular.module('ShoppingListCheckOff', [])
        .controller('ToBuyController',ToBuyController)
        .controller('AlreadyBoughtController',AlreadyBoughtController)
        .service('ShoppingListService', ShoppingListService);

//ToBuyController
    ToBuyController.$inject = ['ShoppingListService'];
    function ToBuyController(ShoppingListService) {
        var toBuyList = this;
        toBuyList.toBuyItems=ShoppingListService.getToBuyItems();
        toBuyList.moveItem = function (itemIndex) {
            ShoppingListService.moveItem(itemIndex);
        };
    }

//AlreadyBoughtController
    AlreadyBoughtController.$inject = ['ShoppingListService'];
    function AlreadyBoughtController(ShoppingListService) {
        var boughtList = this;
        boughtList.boughtItems=ShoppingListService.getBoughtItems();
    }

//Service
    function ShoppingListService() {
        var service = this;

        // List of shopping items
        var toBuyItems =  [
            {
                name: "Milk Packets",
                quantity: "2"
            },
            {
                name: "Donuts",
                quantity: "300"
            },
            {
                name: "Cookies",
                quantity: "500"
            },
            {
                name: "Chocolates",
                quantity: "50"
            },
            {
                name: "Fruit Juice Bottles",
                quantity: "5"
            }
        ];

        var boughtItems=[];

        service.moveItem = function (itemIndex) {
            boughtItems.push(toBuyItems[itemIndex]);
            toBuyItems.splice(itemIndex, 1);
        };

        service.getToBuyItems = function () {
            return toBuyItems;
        };

        service.getBoughtItems = function () {
            return boughtItems;
        };
    }
})();
