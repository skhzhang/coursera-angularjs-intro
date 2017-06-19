(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])

.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService)

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
    var toBuy = this;

    toBuy.items = ShoppingListCheckOffService.getToBuyItems();

    toBuy.checkOffItem = function(itemIndex) {
        ShoppingListCheckOffService.moveToBought(itemIndex);
    };

}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
    var alreadyBought = this;

    alreadyBought.items = ShoppingListCheckOffService.getBoughtItems();
}

function ShoppingListCheckOffService() {
    var service = this;

    var toBuyItems = [  { name: "boxes of froyo", quantity: 223 },
                        { name: "bags of gingerbread men", quantity: 237 },
                        { name: "boxes of honeycomb candies", quantity: 326 },
                        { name: "boxes of ice cream sandwiches", quantity: 404 },
                        { name: "bags of jellybeans", quantity: 431 },
                        { name: "boxes of KitKats", quantity: 444 },
                        { name: "boxes of lollipops", quantity: 511 },
                        { name: "bags of marshmallows", quantity: 601 },
                        { name: "boxes of nougat bars", quantity: 712 },
                        { name: "boxes of oreos", quantity: 80 },];
    var boughtItems = [];

    // Move specified item from "to buy" list to "bought" list.
    service.moveToBought = function(itemIndex) {
        boughtItems.push(toBuyItems[itemIndex]);
        toBuyItems.splice(itemIndex, 1);
    }

    // Get the items of the "to buy" list.
    service.getToBuyItems = function() {
        return toBuyItems;
    };

    // Get the items of the "bought" list.
    service.getBoughtItems = function() {
        return boughtItems;
    };
}


})();