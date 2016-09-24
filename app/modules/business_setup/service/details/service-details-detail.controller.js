(function() {
    'use strict';

    angular
        .module('gCompanyApp')
        .controller('ServiceDetailsDetailController', ServiceDetailsDetailController);

    ServiceDetailsDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'DataUtils', 'entity', 'ServiceDetails', 'Location', 'SubType', 'Type', 'Category'];

    function ServiceDetailsDetailController($scope, $rootScope, $stateParams, DataUtils, entity, ServiceDetails, Location, SubType, Type, Category) {
        var vm = this;

        vm.serviceDetails = entity;
        vm.byteSize = DataUtils.byteSize;
        vm.openFile = DataUtils.openFile;

        var unsubscribe = $rootScope.$on('gCompanyApp:serviceDetailsUpdate', function(event, result) {
            vm.serviceDetails = result;
        });
        $scope.$on('$destroy', unsubscribe);
    }
})();
