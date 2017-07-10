(function () {
"use strict";

angular.module('public')
.controller('UserInfoController', UserInfoController);

UserInfoController.$inject = ['AccountDataService', 'ApiPath'];
function UserInfoController(AccountDataService, ApiPath) {
  var $ctrl = this;

  $ctrl.userInfo = AccountDataService.getUserInfo();
  $ctrl.basePath = ApiPath;

  // Get favdish details.
  AccountDataService.getMenuItem($ctrl.userInfo.favdish)
  .then(function(response) {
    $ctrl.favdishTitle = response.data.name;
    $ctrl.favdishDes = response.data.description;
  });

}

})();
