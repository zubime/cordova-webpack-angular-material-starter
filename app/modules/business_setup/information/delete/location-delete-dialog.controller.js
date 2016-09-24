'use strict';

export default function LocationDeleteController($mdDialog, entity, Location) {
        'ngInject';
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
