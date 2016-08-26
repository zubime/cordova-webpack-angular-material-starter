(function() {
    'use strict';

    angular
        .module('gCompanyApp')
        .controller('LocationDeleteController',LocationDeleteController);

    LocationDeleteController.$inject = ['$mdDialog', 'entity', 'Location'];

    function LocationDeleteController($mdDialog, entity, Location) {
        var vm = this;

        vm.location = entity;
        vm.clear = clear;
        vm.confirmDelete = confirmDelete;

        function clear () {
            $mdDialog.cancel('cancel');
        }

        function confirmDelete (id) {
            Location.delete({id: id},
                function () {
                    $mdDialog.hide(true);
                });
        }
    }
})();
