'use strict';

module.exports =  require('angular')
    .module('gCompanyApp')
    .config(config);

  function config($urlRouterProvider) {
    $urlRouterProvider.otherwise('/location');
  }
