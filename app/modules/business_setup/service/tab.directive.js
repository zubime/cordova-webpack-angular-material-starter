import template from "ngtemplate?prefix=service/!./tab.html";
import bottom   from "ngtemplate?prefix=service/!./bottomMenu/bottom-sheet.html";
import BottomSheetCtrl from "./bottomMenu/bottom-sheet.controller.js";
var angular  = require('angular');



class ServiceTabDirective {

  constructor(){
      this.restrict = 'E';
      this.templateUrl = template;
      this.controllerAs = 'vm';
      this.controller = ServiceTabDirectiveController;

  }

  link(scope,elelemt,attrs){

  }
  hello(){
    alert('hello');
  }

}

class ServiceTabDirectiveController{
  constructor($scope,$mdBottomSheet){
      $scope.alert = '';
      this.$scope = $scope;
      this.$mdBottomSheet = $mdBottomSheet;
  }
  doSecondaryAction (){
    alert('hello');
  }

  showListBottomSheet () {
    this.$mdBottomSheet.show({
      templateUrl: bottom,
      controller:  'serviceTabBottomSheetCtrl'
    }).then(function(clickedItem) {

    });
  };
}


angular.module('gCompanyApp')
.controller('serviceTabBottomSheetCtrl',() => new BottomSheetCtrl)
.directive('serviceTab',() => new ServiceTabDirective);
