(function() {
    'use strict';

    angular
        .module('gCompanyApp')
        .controller('AccesoryDeleteController',AccesoryDeleteController);

    AccesoryDeleteController.$inject = ['$uibModalInstance', 'entity', 'Accesory'];

    function AccesoryDeleteController($uibModalInstance, entity, Accesory) {
        var vm = this;

        vm.accesory = entity;
        vm.clear = clear;
        vm.confirmDelete = confirmDelete;
        
        function clear () {
            $uibModalInstance.dismiss('cancel');
        }

        function confirmDelete (id) {
            Accesory.delete({id: id},
                function () {
                    $uibModalInstance.close(true);
                });
        }
    }
})();
