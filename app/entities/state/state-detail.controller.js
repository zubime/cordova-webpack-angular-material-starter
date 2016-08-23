(function() {
    'use strict';

    angular
        .module('gCompanyApp')
        .controller('StateDetailController', StateDetailController);

    StateDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'entity', 'State', 'City', 'Country'];

    function StateDetailController($scope, $rootScope, $stateParams, entity, State, City, Country) {
        var vm = this;

        vm.state = entity;

        var unsubscribe = $rootScope.$on('gCompanyApp:stateUpdate', function(event, result) {
            vm.state = result;
        });
        $scope.$on('$destroy', unsubscribe);
    }
})();
