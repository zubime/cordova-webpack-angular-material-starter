(function() {
    'use strict';

    angular
        .module('gCompanyApp')
        .controller('CancallationPolicyController', CancallationPolicyController);

    CancallationPolicyController.$inject = ['$scope', '$state', 'CancallationPolicy'];

    function CancallationPolicyController ($scope, $state, CancallationPolicy) {
        var vm = this;
        
        vm.cancallationPolicies = [];

        loadAll();

        function loadAll() {
            CancallationPolicy.query(function(result) {
                vm.cancallationPolicies = result;
            });
        }
    }
})();
