(function() {
    'use strict';

    angular
        .module('gCompanyApp')
        .controller('CancallationPolicyDeleteController',CancallationPolicyDeleteController);

    CancallationPolicyDeleteController.$inject = ['$uibModalInstance', 'entity', 'CancallationPolicy'];

    function CancallationPolicyDeleteController($uibModalInstance, entity, CancallationPolicy) {
        var vm = this;

        vm.cancallationPolicy = entity;
        vm.clear = clear;
        vm.confirmDelete = confirmDelete;
        
        function clear () {
            $uibModalInstance.dismiss('cancel');
        }

        function confirmDelete (id) {
            CancallationPolicy.delete({id: id},
                function () {
                    $uibModalInstance.close(true);
                });
        }
    }
})();
