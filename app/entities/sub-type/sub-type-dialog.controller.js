(function() {
    'use strict';

    angular
        .module('gCompanyApp')
        .controller('SubTypeDialogController', SubTypeDialogController);

    SubTypeDialogController.$inject = ['$timeout', '$scope', '$stateParams', '$uibModalInstance', 'entity', 'SubType', 'Type'];

    function SubTypeDialogController ($timeout, $scope, $stateParams, $uibModalInstance, entity, SubType, Type) {
        var vm = this;

        vm.subType = entity;
        vm.clear = clear;
        vm.save = save;
        vm.types = Type.query();

        $timeout(function (){
            angular.element('.form-group:eq(1)>input').focus();
        });

        function clear () {
            $uibModalInstance.dismiss('cancel');
        }

        function save () {
            vm.isSaving = true;
            if (vm.subType.id !== null) {
                SubType.update(vm.subType, onSaveSuccess, onSaveError);
            } else {
                SubType.save(vm.subType, onSaveSuccess, onSaveError);
            }
        }

        function onSaveSuccess (result) {
            $scope.$emit('gCompanyApp:subTypeUpdate', result);
            $uibModalInstance.close(result);
            vm.isSaving = false;
        }

        function onSaveError () {
            vm.isSaving = false;
        }


    }
})();
