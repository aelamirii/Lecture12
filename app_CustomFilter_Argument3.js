(function () {
'use strict'

angular.module('MsgApp', [] )
.controller('MsgController', MsgController)
.filter('lovess', LovesFilter )
.filter('truth', TruthFilter);

MsgController.$inject = ['$scope' , 'lovessFilter'];

function MsgController($scope , lovessFilter ) {

  $scope.name = "Abdelhay";

  $scope.sayMessage = function () {
    var msg = $scope.name + " likes to eat healthy food !";
    return msg;
  };

  $scope.sayLovesMessage = function () {
    var msg = $scope.name + " likes to eat healthy food !";
    var output = lovessFilter(msg);
    return output;
  };

}

//******* Custom Filter *********
function LovesFilter() {
  return function (input) {
    input = input || "" ;
    input = input.replace("likes" , "loves" );
    return input;
  };
}

//****** Custom filter with arguements *********
function TruthFilter() {
  return function (input, target, replace) {
    input = input || "" ;
    input = input.replace(target, replace);
    return input;
  }

}



})();
