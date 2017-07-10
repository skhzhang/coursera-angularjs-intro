(function() {
"use strict";

angular.module('common', [])
.constant('ApiPath', 'https://thawing-hamlet-20145.herokuapp.com')
.config(config);

config.$inject = ['$httpProvider'];
function config($httpProvider) {
  $httpProvider.interceptors.push('loadingHttpInterceptor');
}

})();
