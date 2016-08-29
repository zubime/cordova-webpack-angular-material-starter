var template = require("ngtemplate?prefix=resource/!./tab.html");
var angular  = require('angular');

class ResourceTabDirective {
  constructor(){
      this.restrict = 'E';
      this.templateUrl = template
  }

  controller($scope, $state){

  }
  link(scope,elelemt,attrs){

  }
}

angular.module('gCompanyApp').directive('resourceTab',() => new ResourceTabDirective);
 
