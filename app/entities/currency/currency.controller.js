(function() {
    'use strict';

    angular
        .module('gCompanyApp')
        .controller('CurrencyController', CurrencyController);

    CurrencyController.$inject = ['$scope', '$state', 'Currency'];

    function CurrencyController ($scope, $state, Currency) {
        var vm = this;
        
        vm.currencies = [];

        loadAll();

        function loadAll() {
            Currency.query(function(result) {
                vm.currencies = result;
            });
        }
    }
})();
