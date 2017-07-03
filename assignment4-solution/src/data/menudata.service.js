(function () {
'use strict';

angular.module('data')
.service('MenuDataService', MenuDataService);

MenuDataService.$inject = ['$http'];
function MenuDataService($http) {
    var service = this;

    var categories = [];
    var items = [];

    // return a promise which is a result of using the $http service, using 
    // the following REST API endpoint: 
    // https://davids-restaurant.herokuapp.com/categories.json
    service.getAllCategories = function() {
        var response = $http({
            method: "GET",
            url: "https://davids-restaurant.herokuapp.com/categories.json",
        })
        .then(function(response) {

            // Set categories to the response.
            categories = response.data;

            return categories;
        });

        return response;
    };

    // return a promise which is a result of using the $http service, 
    // using the following REST API endpoint: 
    // https://davids-restaurant.herokuapp.com/menu_items.json?category=, where, 
    // before the call to the server, your code should append whatever 
    // categoryShortName value was passed in as an argument into the 
    // getItemsForCategory method.
    service.getItemsForCategory = function(categoryShortName) {
        var response = $http({
            method: "GET",
            url: "https://davids-restaurant.herokuapp.com/menu_items.json?category=" + categoryShortName,
        })
        .then(function(response) {

            // Set items to the response.
            items = response.data.menu_items;

            return items;
        });

        return response;

    }

}

})();
