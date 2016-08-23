(function() {
    'use strict';

    angular
        .module('gCompanyApp')
        .controller('CountryDetailController', CountryDetailController);

    CountryDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'entity', 'Country', 'State'];

    function CountryDetailController($scope, $rootScope, $stateParams, entity, Country, State) {
        var vm = this;

        vm.country = entity;

        var unsubscribe = $rootScope.$on('gCompanyApp:countryUpdate', function(event, result) {
            vm.country = result;
        });
        $scope.$on('$destroy', unsubscribe);
    }
})();
