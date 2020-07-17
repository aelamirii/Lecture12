(function () {
'use strict'

angular.module('MsgApp', [])
.controller('MsgController',MsgController )
.filter('loves', LovesFilter)
.filter('truth', TruthFilter);

MsgController.$inject = ['$scope', 'lovesFilter' , 'truthFilter'];

function MsgController($scope, lovesFilter , truthFilter) {

  $scope.name = "Abdelhay";
  $scope.message  = "";

  $scope.sayMessage = function () {
    var msg = $scope.name + " likes to eat healthy food."
    return msg;
  };

  $scope.sayLovesMessage = function () {
    var msg = $scope.name + " likes to eat healthy food."
    var output = lovesFilter(msg);
    return output;

    // //$scope.message  = $scope.name + " likes to eat healthy food."
    // $scope.message  = lovesFilter($scope.message );
    // return $scope.message ;
  };

  // $scope.sayTruthMessage = function () {
  //   // var msg = $scope.name + " likes to eat healthy food."
  //   // var output = lovesFilter(msg);
  //   // return output;
  //
  //   //$scope.message  = $scope.name + " likes to eat healthy food."
  //   console.log($scope.message);
  //   $scope.message  = truthFilter($scope.message, 'healthy' , 'cookie' );
  //   return $scope.message ;
  // };

}
//***** Filter function ******
function LovesFilter() {
  return function (input) {
    input = input || "" ;
    input = input.replace("likes", "loves");
    return input;
  };
}


//**** Filter with arguments *****
function TruthFilter() {
  return function (input, target, replace) {
    input = input || "";
    input = input.replace(target, replace);
    return input;
  }

}



})();
