var template = require("ngtemplate?prefix=service/!./tab.html");
var bottom   = require("ngtemplate?prefix=service/!./bottom-sheet.html");
var bottomCtrl = require("./bottom-sheet.controller.js");
var angular  = require('angular');



class ServiceTabDirective {

  constructor(){
      this.restrict = 'E';
      this.templateUrl = template;

      this.controllerAs = 'vm';
  }

  controller($scope, $timeout, $mdBottomSheet, $mdToast){
    $scope.alert = '';
    $scope.showListBottomSheet = function() {
      $scope.alert = '';
      $mdBottomSheet.show({
        templateUrl: bottom,
        controller:  bottomCtrl
      }).then(function(clickedItem) {
        $scope.alert = clickedItem['name'] + ' clicked!';
      });
    };

  }
  link(scope,elelemt,attrs){

  }
  hello(){
    alert('hello');
  }

}

angular.module('gCompanyApp').directive('serviceTab',() => new ServiceTabDirective);
