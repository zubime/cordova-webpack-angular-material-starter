(function() {
    'use strict';

    angular
        .module('gCompanyApp')
        .controller('LocationDialogController', LocationDialogController);

    LocationDialogController.$inject = ['$timeout', '$scope', '$stateParams', '$mdDialog', 'DataUtils', 'entity', 'Location'];

    function LocationDialogController ($timeout, $scope, $stateParams, $mdDialog, DataUtils, entity, Location) {
        var vm = this;
        vm.delay = true;
        vm.location = entity;
        vm.clear = clear;
        vm.byteSize = DataUtils.byteSize;
        vm.openFile = DataUtils.openFile;
        vm.save = save;
        $timeout(function(){vm.delay= false; },150);


        $timeout(function (){
            angular.element('.form-group:eq(1)>input').focus();
        });

        function clear () {
            $mdDialog.cancel('cancel');
        }

        function save () {
            vm.isSaving = true;
            if (vm.location.id !== null) {
                Location.update(vm.location, onSaveSuccess, onSaveError);
            } else {
                Location.save(vm.location, onSaveSuccess, onSaveError);
            }
        }

        function onSaveSuccess (result) {
            $scope.$emit('gCompanyApp:locationUpdate', result);
            $mdDialog.hide(result);
            vm.isSaving = false;
        }

        function onSaveError () {
            vm.isSaving = false;
        }


        vm.setImage = function ($file, location) {
            if ($file && $file.$error === 'pattern') {
                return;
            }
            if ($file) {
                DataUtils.toBase64($file, function(base64Data) {
                    $scope.$apply(function() {
                        location.image = base64Data;
                        location.imageContentType = $file.type;
                    });
                });
            }
        };

        vm.setLogo = function ($file, location) {
            if ($file && $file.$error === 'pattern') {
                return;
            }
            if ($file) {
                DataUtils.toBase64($file, function(base64Data) {
                    $scope.$apply(function() {
                        location.logo = base64Data;
                        location.logoContentType = $file.type;
                    });
                });
            }
        };

        vm.setBigImage = function ($file, location) {
            if ($file && $file.$error === 'pattern') {
                return;
            }
            if ($file) {
                DataUtils.toBase64($file, function(base64Data) {
                    $scope.$apply(function() {
                        location.bigImage = base64Data;
                        location.bigImageContentType = $file.type;
                    });
                });
            }
        };

    }
})();
