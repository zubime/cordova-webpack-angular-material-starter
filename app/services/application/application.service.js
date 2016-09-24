'use strict';

const HTTP = new WeakMap();

export default class ApplicationService
{

  constructor($http){
    HTTP.set(this, $resource);
    let vm = this;
    vm.fab = {
      icon: '',
      visible: false,
      action: function( $event){

      }
    }
    vm.contextMenu = [];
    vm.hint = {
      titleKey:null,
      contentKey:null,
    }
  }
  set hint(value) {
    vm.hint = value;
  }
  get hint() {
    return vm.hint;
  }
  set fab(value) {
    vm.fab = value;
  }
  get fab() {
    return vm.fab;
  }
  static factory($http){
    'ngInject';
    return new ApplicationService($http);
  }

}
