'use strict';

  class AppCtrl {
    constructor($scope, $timeout, $mdSidenav) {
      let vm = this;
      vm.ctrlName = 'HomeCtrl';
      vm.$mdSidenav  = $mdSidenav;
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
      this.$mdSidenav('left').toggle();
    }

  }

AppCtrl.$inject = ['$scope', '$timeout', '$mdSidenav'];
export default AppCtrl;
