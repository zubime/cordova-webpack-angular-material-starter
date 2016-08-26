(function() {
    'use strict';

    angular
        .module('gCompanyApp')
        .controller('ServiceDetailsDeleteController',ServiceDetailsDeleteController);

    ServiceDetailsDeleteController.$inject = ['$uibModalInstance', 'entity', 'ServiceDetails'];

    function ServiceDetailsDeleteController($uibModalInstance, entity, ServiceDetails) {
        var vm = this;

        vm.serviceDetails = entity;
        vm.clear = clear;
        vm.confirmDelete = confirmDelete;

        function clear () {
            $uibModalInstance.dismiss('cancel');
        }

        function confirmDelete (locationId, id) {
            ServiceDetails.delete({locationId:locationId,id: id},
                function () {
                    $uibModalInstance.close(true);
                });
        }
    }
})();
