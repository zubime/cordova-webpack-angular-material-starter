'use strict';

  class AppCtrl {
    constructor($scope, $timeout, $mdSidenav,$state,$stateParams,$rootScope) {
      'ngInject';
      $scope.$on('toggleMenu',function(event, mass){ $mdSidenav('left').toggle(); })
      let vm = this;
      vm.ctrlName = 'HomeCtrl';
      vm.$state = $state;
      vm.$scope = $scope;
      vm.notifications = {
        help: true,
        info: true,
        open: function(which){
          if(which === 'help'){
            this.help = !this.help;
          }
        }
      }

    }

    toggleLeft(){
      if(this.$state.current.data && this.$state.current.data.menu ){
        if(this.$state.current.data.menu.state){
          this.$state.go(this.$state.current.data.menu.state);
        }
        if(this.$state.current.data.menu.event){
          this.$scope.$emit(this.$state.current.data.menu.event);
        }
      }else{

      }

    }

  }

export default AppCtrl;
