(function () {
'use strict'

angular.module('MsgApp', [])
.controller('MsgController' , MsgController)
.filter('lovesss' , LovessFilter)
.filter('Truuth', TruthFilter);

MsgController.$inject = ['$scope', 'lovesssFilter' ];

function MsgController($scope , lovesssFilter ) {

  $scope.name = "Abdelhay";
  $scope.message = "";

  $scope.sayMessage = function () {
    var msg = $scope.name + " likes to eat healthy food !";
    return msg;
  };

  $scope.sayLovesMessage = function () {
    var msg = $scope.name + " likes to eat healthy food !";
    var output = lovesssFilter(msg);
    return output;
  };

//   $scope.sayTruthMessage = function () {
//   var msg = $scope.name + " likes to eat healthy food !";
//   var output = TruuthFilter(msg, "healthy" , "cookie")
//   return output;
// };

}


//******* Custom Filter *********
function LovessFilter() {
  return function (input) {
    input = input || "";
    input = input.replace("likes", "loves");
    return input;
  }

}

//****** Custom filter with arguements *********
function TruthFilter() {
  return function (input, target, replace) {
    input = input || "";
    input = input.replace(target , replace);
    return input;
  }

}




})();
