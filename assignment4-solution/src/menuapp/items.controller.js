(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemsController', ItemsController);

ItemsController.$inject = ['MenuDataService', 'list'];
function ItemsController(MenuDataService, list) {
  var mainList = this;
  mainList.items = list;
}

})();
