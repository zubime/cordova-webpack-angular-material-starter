(function() {
    'use strict';

    angular
        .module('gCompanyApp')
        .controller('ServiceDetailsDialogController', ServiceDetailsDialogController);

    ServiceDetailsDialogController.$inject = ['$timeout', '$scope', '$stateParams', '$uibModalInstance', 'DataUtils', 'entity', 'ServiceDetails', 'Location', 'SubType', 'Type'];

    function ServiceDetailsDialogController ($timeout, $scope, $stateParams, $uibModalInstance, DataUtils, entity, ServiceDetails, Location, SubType, Type) {
        var vm = this;

        vm.serviceDetails = entity;
        vm.clear = clear;
        vm.byteSize = DataUtils.byteSize;
        vm.openFile = DataUtils.openFile;
        vm.save = save;
        vm.locations = Location.query();
        vm.subtypes = SubType.query();
        vm.types = Type.query();


        $timeout(function (){
            angular.element('.form-group:eq(1)>input').focus();
        });

        function clear () {
            $uibModalInstance.dismiss('cancel');
        }

        function save () {
            vm.isSaving = true;
            vm.serviceDetails.iconClass = _.find(vm.types,{'id':vm.serviceDetails.typeId}).iconUri;

            if (vm.serviceDetails.id !== null) {
                ServiceDetails.update(vm.serviceDetails, onSaveSuccess, onSaveError);
            } else {
                ServiceDetails.save(vm.serviceDetails, onSaveSuccess, onSaveError);
            }
        }

        function onSaveSuccess (result) {
            $scope.$emit('gCompanyApp:serviceDetailsUpdate', result);
            $uibModalInstance.close(result);
            vm.isSaving = false;
        }

        function onSaveError () {
            vm.isSaving = false;
        }


        vm.setImage = function ($file, serviceDetails) {
            if ($file && $file.$error === 'pattern') {
                return;
            }
            if ($file) {
                DataUtils.toBase64($file, function(base64Data) {
                    $scope.$apply(function() {
                        serviceDetails.image = base64Data;
                        serviceDetails.imageContentType = $file.type;
                    });
                });
            }
        };

    }
})();
