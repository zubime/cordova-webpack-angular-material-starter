'use strict';

class ResourceDetailController{
        constructor($scope, $rootScope, $stateParams, DataUtils, entity, Resource) {
        'ngInject';
        var vm = this;

        vm.resource = entity;
        vm.byteSize = DataUtils.byteSize;
        vm.openFile = DataUtils.openFile;

        var unsubscribe = $rootScope.$on('gCompanyApp:resourceUpdate', function(event, result) {
            vm.resource = result;
        });
        $scope.$on('$destroy', unsubscribe);
    }
}

export default ResourceDetailController;
