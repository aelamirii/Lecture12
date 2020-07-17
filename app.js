(function () {
'use strict'

angular.module('MsgApp', [])

.controller('MsgController', MsgController );

MsgController.înject = ['$scope', '$filter'];

function MsgController($scope, $filter) {

  $scope.name ="Abdelhay";
  $scope.stateOfBeing = "1";
  $scope.cookieCost = .45;

  $scope.sayMessage = function () {
    var msg = "Abdelhay likes to eat healthy food.";
    var output =$filter('uppercase')(msg);

    return output;
  };

  $scope.feed = function () {
    $scope.stateOfBeing = "2";
  }

}


})();
