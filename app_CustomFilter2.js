(function () {
'use strict'

angular.module('MsgApp', [])

.controller('MsgController', MsgController )
.filter('lovess', LovesFilter );


MsgController.$inject = ['$scope', 'lovessFilter'];

function MsgController($scope , lovessFilter) {

  $scope.name = "Abdelhay";
  $scope.message = "";

  $scope.sayMEssage = function () {
    var msg = "Abdelhay likes to eat healthy food.";
    return msg;
  };

  $scope.sayLovesMEssage = function () {
    var msg = "Abdelhay likes to eat healthy food.";
    var output = lovessFilter(msg);
    return output;
  };


}


function LovesFilter() {
  return function (input) {
    input = input || "" ;
    input = input.replace("likes", "loves");
    return input;
  }

}


})();
