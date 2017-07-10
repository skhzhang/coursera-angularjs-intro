(function () {
'use strict';

angular.module('data')
.service('AccountDataService', AccountDataService);

AccountDataService.$inject = ['$http', 'ApiPath'];
function AccountDataService($http, ApiPath) {
    var service = this;

    var firstname = '';
    var lastname = '';
    var email = '';
    var phonenumber = '';
    var favdish = '';

    // Get menu item specified from API.
    service.getMenuItem = function(shortName) {
        var response = $http({
          method: "GET",
          url: ApiPath +"/menu_items/" + shortName + ".json",
        })

        return response;
    }

    // Set user information to local storage.
    // TIP:
    // See Storage tab in devtools to remove these items from localStorage.
    service.setUserInfo = function(userInfo) {

        localStorage.setItem('firstname', userInfo.firstname);
        localStorage.setItem('lastname', userInfo.lastname);
        localStorage.setItem('email', userInfo.email);
        localStorage.setItem('phone', userInfo.phone);
        localStorage.setItem('favdish', userInfo.favdish);


        return true;
    };

    // Get user information from local storage.
    service.getUserInfo = function() {

        var result = {};

        if (!localStorage.getItem('firstname')) {
          return null;
        }
        else {
          result = {
            firstname : localStorage.getItem('firstname'),
            lastname : localStorage.getItem('lastname'),
            email : localStorage.getItem('email'),
            phone : localStorage.getItem('phone'),
            favdish : localStorage.getItem('favdish'),
          }
          return result;
        }
    };

}

})();
