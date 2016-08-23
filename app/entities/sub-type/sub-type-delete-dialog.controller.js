(function() {
    'use strict';

    angular
        .module('gCompanyApp')
        .controller('SubTypeDeleteController',SubTypeDeleteController);

    SubTypeDeleteController.$inject = ['$uibModalInstance', 'entity', 'SubType'];

    function SubTypeDeleteController($uibModalInstance, entity, SubType) {
        var vm = this;

        vm.subType = entity;
        vm.clear = clear;
        vm.confirmDelete = confirmDelete;
        
        function clear () {
            $uibModalInstance.dismiss('cancel');
        }

        function confirmDelete (id) {
            SubType.delete({id: id},
                function () {
                    $uibModalInstance.close(true);
                });
        }
    }
})();
