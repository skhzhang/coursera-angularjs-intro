(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['AccountDataService'];
function SignUpController(AccountDataService) {
  var $ctrl = this;

  // On submission of the sign up form.
  $ctrl.submit = function (userInfo) {

    var favdishPromise = AccountDataService.getMenuItem(userInfo.favdish);

    favdishPromise
    .then(function(response) {

      // Set user info.
      AccountDataService.setUserInfo(userInfo);

      $ctrl.successful = true;
    })
    .catch(function(error) {

      $ctrl.successful = false;
    });

  };
}

})();
