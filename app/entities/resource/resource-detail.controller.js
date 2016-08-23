(function() {
    'use strict';

    angular
        .module('gCompanyApp')
        .controller('ResourceDetailController', ResourceDetailController);

    ResourceDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'DataUtils', 'entity', 'Resource'];

    function ResourceDetailController($scope, $rootScope, $stateParams, DataUtils, entity, Resource) {
        var vm = this;

        vm.resource = entity;
        vm.byteSize = DataUtils.byteSize;
        vm.openFile = DataUtils.openFile;

        var unsubscribe = $rootScope.$on('gCompanyApp:resourceUpdate', function(event, result) {
            vm.resource = result;
        });
        $scope.$on('$destroy', unsubscribe);
    }
})();
