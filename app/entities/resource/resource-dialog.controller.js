(function() {
    'use strict';

    angular
        .module('gCompanyApp')
        .controller('ResourceDialogController', ResourceDialogController);

    ResourceDialogController.$inject = ['$timeout', '$scope', '$stateParams', '$uibModalInstance', 'DataUtils', 'entity', 'Resource'];

    function ResourceDialogController ($timeout, $scope, $stateParams, $uibModalInstance, DataUtils, entity, Resource) {
        var vm = this;

        vm.resource = entity;
        vm.clear = clear;
        vm.byteSize = DataUtils.byteSize;
        vm.openFile = DataUtils.openFile;
        vm.save = save;

        $timeout(function (){
            angular.element('.form-group:eq(1)>input').focus();
        });

        function clear () {
            $uibModalInstance.dismiss('cancel');
        }

        function save () {
            vm.isSaving = true;
            if (vm.resource.id !== null) {
                Resource.update(vm.resource, onSaveSuccess, onSaveError);
            } else {
                Resource.save(vm.resource, onSaveSuccess, onSaveError);
            }
        }

        function onSaveSuccess (result) {
            $scope.$emit('gCompanyApp:resourceUpdate', result);
            $uibModalInstance.close(result);
            vm.isSaving = false;
        }

        function onSaveError () {
            vm.isSaving = false;
        }


        vm.setImage = function ($file, resource) {
            if ($file && $file.$error === 'pattern') {
                return;
            }
            if ($file) {
                DataUtils.toBase64($file, function(base64Data) {
                    $scope.$apply(function() {
                        resource.image = base64Data;
                        resource.imageContentType = $file.type;
                    });
                });
            }
        };

    }
})();
