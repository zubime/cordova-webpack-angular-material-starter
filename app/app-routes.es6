'use strict';

module.exports =  require('angular')
    .module('www')
    .config(config);

  function config($urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');
  }
