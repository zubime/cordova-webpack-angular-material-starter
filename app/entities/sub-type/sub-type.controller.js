(function() {
    'use strict';

    angular
        .module('gCompanyApp')
        .controller('SubTypeController', SubTypeController);

    SubTypeController.$inject = ['$scope', '$state', 'SubType'];

    function SubTypeController ($scope, $state, SubType) {
        var vm = this;
        
        vm.subTypes = [];

        loadAll();

        function loadAll() {
            SubType.query(function(result) {
                vm.subTypes = result;
            });
        }
    }
})();
