/* Controllers */
(function() {
  'use strict';
  angular
    .module('app.core')
    .controller('coreCtrl', coreCtrl);
  //core 
  function coreCtrl($scope,$timeout,$window,$rootScope,$location,$filter) {
      var vmc = this;
      $scope.titlePage = "dashboard";
    }
})();
