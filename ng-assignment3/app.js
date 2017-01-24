(function() {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.directive('foundItems', FoundItemsDirective);

function FoundItemsDirective() {
    return {
        templateUrl: 'directive.html',
        restrict: 'E',
        scope: {
            foundItems: '<',
            onRemove: '&'
        },
        controller: FoundItemsDirectiveController,
        controllerAs: 'list',
        bindToController: true
    };
}

function FoundItemsDirectiveController() {
    var list = this;
}

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
    var menu = this;
    menu.searchTerm = '';
    menu.getMatchedMenuItems = function() {
        if(menu.searchTerm === ""){
            menu.found = [];
            return;
        }
        var promise = MenuSearchService.getMatchedMenuItems();
        promise.then(function(response) {
            var foundItems = [];
            for (var i = 0; i < response.data.menu_items.length; i++){
                if (response.data.menu_items[i].description.toLowerCase().indexOf(menu.searchTerm) !== -1){
                    foundItems.push(response.data.menu_items[i]);
                }
            }
            menu.found = foundItems;
        });
    }
    menu.removeItem = function(itemIndex) {
        menu.found.splice(itemIndex, 1);
    }
}

MenuSearchService.$inject = ['$http'];
function MenuSearchService($http) {
    var service = this;

    service.getMatchedMenuItems = function() {
        return $http({
            method: "GET",
            url: "https://davids-restaurant.herokuapp.com/menu_items.json"
        });
    }
}


})();
