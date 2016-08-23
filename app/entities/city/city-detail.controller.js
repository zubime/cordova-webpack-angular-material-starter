(function() {
    'use strict';

    angular
        .module('gCompanyApp')
        .controller('CityDetailController', CityDetailController);

    CityDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'entity', 'City', 'State'];

    function CityDetailController($scope, $rootScope, $stateParams, entity, City, State) {
        var vm = this;

        vm.city = entity;

        var unsubscribe = $rootScope.$on('gCompanyApp:cityUpdate', function(event, result) {
            vm.city = result;
        });
        $scope.$on('$destroy', unsubscribe);
    }
})();
