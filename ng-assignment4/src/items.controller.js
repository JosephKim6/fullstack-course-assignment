(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemsController', ItemsController);

ItemsController.$inject = ['MenuDataService', 'items', 'title'];
function ItemsController(MenuDataService, items, title) {
  var itemList = this;
  itemList.items = items;
  itemList.title = title;
}

})();