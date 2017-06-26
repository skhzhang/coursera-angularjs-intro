(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.directive('foundItems', FoundItems);

function FoundItems() {
    var ddo = {
        restrict: "AE",
        templateUrl: 'foundItems.html',
        scope: {
            narrowItDown: '<items',
            onRemove: '&',
        }
    };

    return ddo;
}

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
    var narrowItDown = this;

    narrowItDown.searchTerm = "";
    narrowItDown.found = MenuSearchService.getItems();

    narrowItDown.performSearch = function() {
        if (narrowItDown.searchTerm !== ""){

            // Perform API call and 
            // check items description against search term.
            var promise = MenuSearchService.getMatchedMenuItems(narrowItDown.searchTerm)
            
            promise.then(function() {
                narrowItDown.found = MenuSearchService.getItems();
            });
        }
    };

    narrowItDown.removeItem = function(itemIndex) {
        MenuSearchService.removeItem(itemIndex);
    };

}

MenuSearchService.$inject = ['$http'];
function MenuSearchService($http) {
    var service = this;

    var items = [];

    service.getMatchedMenuItems = function(searchTerm) {

        var response = $http({
            method: "GET",
            url: "https://davids-restaurant.herokuapp.com/menu_items.json",
        })
        .then(function(response) {

            var result = response.data.menu_items;

            // process result and only keep items that match
            var foundItems = [];

            result.forEach(function(item) {
                if (item.description.toLowerCase().indexOf(searchTerm) !== -1) {
                    foundItems.push(item);
                }
            });

            // return processed items
            return foundItems;
        })
        .then(function(result) {
            items = result;
        });

        return response;
    };

    service.removeItem = function(itemIndex) {
        items.splice(itemIndex, 1);
    };

    service.getItems = function () {
        console.log(items);
        return items;
    };
}


})();