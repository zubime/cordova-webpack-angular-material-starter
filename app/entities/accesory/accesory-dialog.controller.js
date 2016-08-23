(function() {
    'use strict';

    angular
        .module('gCompanyApp')
        .controller('AccesoryDialogController', AccesoryDialogController);

    AccesoryDialogController.$inject = ['$timeout', '$scope', '$stateParams', '$uibModalInstance', 'DataUtils', 'entity', 'Accesory', 'Reservation'];

    function AccesoryDialogController ($timeout, $scope, $stateParams, $uibModalInstance, DataUtils, entity, Accesory, Reservation) {
        var vm = this;

        vm.accesory = entity;
        vm.clear = clear;
        vm.byteSize = DataUtils.byteSize;
        vm.openFile = DataUtils.openFile;
        vm.save = save;
        vm.reservations = Reservation.query();

        $timeout(function (){
            angular.element('.form-group:eq(1)>input').focus();
        });

        function clear () {
            $uibModalInstance.dismiss('cancel');
        }

        function save () {
            vm.isSaving = true;
            if (vm.accesory.id !== null) {
                Accesory.update(vm.accesory, onSaveSuccess, onSaveError);
            } else {
                Accesory.save(vm.accesory, onSaveSuccess, onSaveError);
            }
        }

        function onSaveSuccess (result) {
            $scope.$emit('gCompanyApp:accesoryUpdate', result);
            $uibModalInstance.close(result);
            vm.isSaving = false;
        }

        function onSaveError () {
            vm.isSaving = false;
        }


        vm.setImage = function ($file, accesory) {
            if ($file && $file.$error === 'pattern') {
                return;
            }
            if ($file) {
                DataUtils.toBase64($file, function(base64Data) {
                    $scope.$apply(function() {
                        accesory.image = base64Data;
                        accesory.imageContentType = $file.type;
                    });
                });
            }
        };

    }
})();
