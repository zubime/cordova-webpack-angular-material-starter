'use strict';

export default function LocationDetailController($scope, $rootScope, $stateParams, previousState, DataUtils, entity, Location) {
        'ngInject';
        var vm = this;

        vm.location = entity;
        vm.previousState = previousState.name;
        vm.byteSize = DataUtils.byteSize;
        vm.openFile = DataUtils.openFile;

        var unsubscribe = $rootScope.$on('gCompanyApp:locationUpdate', function(event, result) {
            vm.location = result;
        });
        $scope.$on('$destroy', unsubscribe);
    }
