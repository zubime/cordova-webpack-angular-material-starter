(function() {
    'use strict';

    angular
        .module('gCompanyApp')
        .controller('StateController', StateController);

    StateController.$inject = ['$scope', '$state', 'State'];

    function StateController ($scope, $state, State) {
        var vm = this;
        
        vm.states = [];

        loadAll();

        function loadAll() {
            State.query(function(result) {
                vm.states = result;
            });
        }
    }
})();
