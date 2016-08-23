(function() {
    'use strict';

    angular
        .module('gCompanyApp')
        .controller('GalleryDialogController', GalleryDialogController);

    GalleryDialogController.$inject = ['$timeout', '$scope', '$stateParams', '$uibModalInstance', 'entity', 'Gallery'];

    function GalleryDialogController ($timeout, $scope, $stateParams, $uibModalInstance, entity, Gallery) {
        var vm = this;

        vm.gallery = entity;
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
            if (vm.gallery.id !== null) {
                Gallery.update(vm.gallery, onSaveSuccess, onSaveError);
            } else {
                Gallery.save(vm.gallery, onSaveSuccess, onSaveError);
            }
        }

        function onSaveSuccess (result) {
            $scope.$emit('gCompanyApp:galleryUpdate', result);
            $uibModalInstance.close(result);
            vm.isSaving = false;
        }

        function onSaveError () {
            vm.isSaving = false;
        }


    }
})();
