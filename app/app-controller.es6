

  class AppCtrl {
    constructor($scope, $timeout, $mdSidenav) {
      let vm = this;
      vm.ctrlName = 'HomeCtrl';
      vm.$mdSidenav  = $mdSidenav;

    }

    toggleLeft(){
      this.$mdSidenav('left').toggle();
    }

  }

AppCtrl.$inject = ['$scope', '$timeout', '$mdSidenav'];
export default AppCtrl;
