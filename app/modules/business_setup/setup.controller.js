'use strict';

class SetupController {
  constructor() {
    let vm = this;
    vm.ctrlName = 'HomeCtrl';
  }
}

/**
 * @ngdoc object
 * @name home.controller:HomeCtrl
 *
 * @description
 *
 */
require('angular')
  .module('gCompanyApp')
  .controller('SetupController', SetupController);
