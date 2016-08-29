var template = require("ngtemplate?relativeTo=/information/&prefix=information/!./tab.html");
var angular  = require('angular');

class InformationTabDirective {
  constructor(){
      this.restrict = 'E';
      this.templateUrl = template
  }

  controller($scope, $state){

  }
  link(scope,elelemt,attrs){

  }
}

angular.module('gCompanyApp').directive('informationTab',() => new InformationTabDirective);
