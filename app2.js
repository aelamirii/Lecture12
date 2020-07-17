(function () {
'use strict'

angular.module('MsgApp', [])

.controller('MsgController',MsgController );

MsgController.$inject = ['$scope', '$filter'];

function MsgController($scope, $filter) {

  $scope.name = "Abdelhay";
  $scope.stateOfBeing = "1";

  $scope.cookieCost = .45;

  $scope.sayMEssage = function () {
    var message=  "Abdelhay likes to eat healthy food.";
    var output = $filter('uppercase')(message);
    return output;
  };

  $scope.feed = function () {
    $scope.stateOfBeing = "2";

  }


}




})();
