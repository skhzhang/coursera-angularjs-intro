(function () {
'use strict';

angular.module('MenuApp')
.component('shoppingList', {
  templateUrl: 'src/menuapp/templates/categories.template.html',
  bindings: {
    items: '<'
  }
});

})();
