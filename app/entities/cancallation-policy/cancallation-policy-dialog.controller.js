(function() {
    'use strict';

    angular
        .module('gCompanyApp')
        .controller('CancallationPolicyDialogController', CancallationPolicyDialogController);

    CancallationPolicyDialogController.$inject = ['$timeout', '$scope', '$stateParams', '$uibModalInstance', 'entity', 'CancallationPolicy'];

    function CancallationPolicyDialogController ($timeout, $scope, $stateParams, $uibModalInstance, entity, CancallationPolicy) {
        var vm = this;

        vm.cancallationPolicy = entity;
        vm.clear = clear;
        vm.save = save;

        $timeout(function (){
            angular.element('.form-group:eq(1)>input').focus();
        });

        function clear () {
            $uibModalInstance.dismiss('cancel');
        }

        function save () {
            vm.isSaving = true;
            if (vm.cancallationPolicy.id !== null) {
                CancallationPolicy.update(vm.cancallationPolicy, onSaveSuccess, onSaveError);
            } else {
                CancallationPolicy.save(vm.cancallationPolicy, onSaveSuccess, onSaveError);
            }
        }

        function onSaveSuccess (result) {
            $scope.$emit('gCompanyApp:cancallationPolicyUpdate', result);
            $uibModalInstance.close(result);
            vm.isSaving = false;
        }

        function onSaveError () {
            vm.isSaving = false;
        }


    }
})();
