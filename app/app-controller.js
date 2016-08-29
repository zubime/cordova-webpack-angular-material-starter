'use strict';

  class AppCtrl {
    constructor($scope, $timeout, $mdSidenav,$state,$stateParams,$rootScope) {


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
      $rootScope.$state = $state;
      $rootScope.$stateParams = $stateParams;
      // Credits: Adam's answer in http://stackoverflow.com/a/20786262/69362
$rootScope.$on('$stateChangeStart',function(event, toState, toParams, fromState, fromParams){
  console.log('$stateChangeStart to '+toState.to+'- fired when the transition begins. toState,toParams : \n',toState, toParams);
});

$rootScope.$on('$stateChangeError',function(event, toState, toParams, fromState, fromParams){
  console.log('$stateChangeError - fired when an error occurs during transition.');
  console.log(arguments);
});

$rootScope.$on('$stateChangeSuccess',function(event, toState, toParams, fromState, fromParams){
  console.log('$stateChangeSuccess to '+toState.name+'- fired once the state transition is complete.');
});

$rootScope.$on('$viewContentLoaded',function(event){
  console.log('$viewContentLoaded - fired after dom rendered',event);
});

$rootScope.$on('$stateNotFound',function(event, unfoundState, fromState, fromParams){
  console.log('$stateNotFound '+unfoundState.to+'  - fired when a state cannot be found by its name.');
  console.log(unfoundState, fromState, fromParams);
});

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

AppCtrl.$inject = ['$scope', '$timeout', '$mdSidenav','$state','$stateParams','$rootScope'];
export default AppCtrl;
