var template = require("ngtemplate?prefix=users/!./tab.html");
var angular  = require('angular');

class UsersTabDirective {
  constructor(){
      this.restrict = 'E';
      this.templateUrl = template
  }

  controller($scope, $state){

  }
  link(scope,elelemt,attrs){

  }
}

angular.module('gCompanyApp').directive('usersTab',() => new UsersTabDirective);
