(function() {
    'use strict';

    angular
        .module('gCompanyApp')
        .controller('StateDialogController', StateDialogController);

    StateDialogController.$inject = ['$timeout', '$scope', '$stateParams', '$uibModalInstance', 'entity', 'State', 'City', 'Country'];

    function StateDialogController ($timeout, $scope, $stateParams, $uibModalInstance, entity, State, City, Country) {
        var vm = this;

        vm.state = entity;
        vm.clear = clear;
        vm.save = save;
        vm.cities = City.query();
        vm.countries = Country.query();

        $timeout(function (){
            angular.element('.form-group:eq(1)>input').focus();
        });

        function clear () {
            $uibModalInstance.dismiss('cancel');
        }

        function save () {
            vm.isSaving = true;
            if (vm.state.id !== null) {
                State.update(vm.state, onSaveSuccess, onSaveError);
            } else {
                State.save(vm.state, onSaveSuccess, onSaveError);
            }
        }

        function onSaveSuccess (result) {
            $scope.$emit('gCompanyApp:stateUpdate', result);
            $uibModalInstance.close(result);
            vm.isSaving = false;
        }

        function onSaveError () {
            vm.isSaving = false;
        }


    }
})();
