(function () {
'use strict';


angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);


ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
    var toBuyList = this;
    toBuyList.items = ShoppingListCheckOffService.getToBuyItems();
    toBuyList.checkOffItem = function (itemIndex) {
        ShoppingListCheckOffService.checkOffItem(itemIndex);
    }
}


AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
    var alreadyBoughtList = this;
    alreadyBoughtList.items = ShoppingListCheckOffService.getAlreadyBoughtItems();
}


function ShoppingListCheckOffService() {
    var service = this;
    var toBuyItems = [
        { name: 'cookies', quantity: 10 },
        { name: 'bars of chocolate', quantity: 3 },
        { name: 'cans of Cola', quantity: 5 },
        { name: 'boxes of milk', quantity: 4 },
        { name: 'bags of crisps', quantity: 2 }
    ];
    var alreadyBoughtItems = [];

    service.getToBuyItems = function() {
        return toBuyItems;
    }

    service.getAlreadyBoughtItems = function() {
        return alreadyBoughtItems;
    }

    service.checkOffItem = function(itemIndex) {
        alreadyBoughtItems.push(toBuyItems[itemIndex]);
        toBuyItems.splice(itemIndex, 1);
    }
}


})();