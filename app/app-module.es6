'use strict';
var angular = require('angular');
require('angular-aria');
// require('angular-material/angular-material.css')
require('material-design-icons');
require('font-awesome/css/font-awesome.css');
require('angular-animate');
require('angular-messages');
require('angular-material');
require('angular-ui-router');
require('./home');

import AppCtrl from './app-controller.es6'


  /* @ngdoc object
   * @name www
   * @description
   *
   */
  angular
    .module('www', [
        'ngAria','ngMaterial','ui.router','home'
    ])
    .config(function($mdThemingProvider,$mdIconProvider) {
      $mdThemingProvider.theme('default')
        .primaryPalette('pink')
        .accentPalette('orange');
      $mdIconProvider
       .defaultIconSet('../svg/mdi.svg')
    })
    .controller('AppCtrl',AppCtrl);
