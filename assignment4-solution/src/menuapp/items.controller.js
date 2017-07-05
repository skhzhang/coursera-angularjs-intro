(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemsController', ItemsController);

ItemsController.$inject = ['list'];
function ItemsController(list) {
  var mainList = this;
  mainList.items = list;
}

})();
