(function () {
'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope', '$filter'];
function LunchCheckController($scope, $filter) {

    $scope.checkAmount = function() {

        // If there are no items entered.
        if (typeof $scope.lunchList === 'undefined' || $scope.lunchList.length === 0) {

            $scope.message = "Please enter data first!";
        }
        else {
            // Execute only if there is something in lunchList.

            var listLength = $scope.lunchList.split(',').length;

            // Less than three items.
            if (listLength <= 3) {
                $scope.message = "Enjoy!";
            }
            // More than 3 items.
            else if (listLength > 3) {
                $scope.message = "Too much!";
            }
        }
    };

}


})();