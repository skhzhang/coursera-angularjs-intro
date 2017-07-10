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

    // Uncomment to clear firstname in local storage.
    localStorage.removeItem('firstname');

    service.getMenuItem = function(shortName) {
        var response = $http({
          method: "GET",
          url: ApiPath +"/menu_items/" + shortName + ".json",
        })

        return response;
    }

    service.setUserInfo = function(userInfo) {

        localStorage.setItem('firstname', userInfo.firstname);
        localStorage.setItem('lastname', userInfo.lastname);
        localStorage.setItem('email', userInfo.email);
        localStorage.setItem('phone', userInfo.phone);
        localStorage.setItem('favdish', userInfo.favdish);

        return true;
    };

    service.getUserInfo = function() {

        var result = {};

        console.log(localStorage.getItem('firstname'));

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
