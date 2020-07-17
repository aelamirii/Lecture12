(function () {
'use strict'

angular.module('MsgApp', [])

.controller('MsgController', MsgController )
.filter('loves', LovesFilter);

MsgController.$inject = ['$scope', 'lovesFilter']; // loves is the filter name + Filter to be appended by AngularJS

function MsgController($scope, lovesFilter) {

  $scope.name ="Abdelhay";
  $scope.stateOfBeing = "1";
  $scope.cookieCost = .45;

  $scope.sayMessage = function () {
    var msg = "Abdelhay likes to eat healthy food.";
  //  var output =$filter('uppercase')(msg);

    return msg;
  };


  $scope.sayLovesMessage = function () {
    var msg = "Abdelhay likes to eat healthy food.";
    msg = lovesFilter(msg);

    return msg;
  };


  $scope.feed = function () {
    $scope.stateOfBeing = "2";
  }

}

function LovesFilter() {
  return function (input) {
    input = input || "";
    input = input.replace("likes", "loves");
    return input;
  };

}


})();
