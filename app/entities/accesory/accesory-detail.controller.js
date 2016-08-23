(function() {
    'use strict';

    angular
        .module('gCompanyApp')
        .controller('AccesoryDetailController', AccesoryDetailController);

    AccesoryDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'DataUtils', 'entity', 'Accesory', 'Reservation'];

    function AccesoryDetailController($scope, $rootScope, $stateParams, DataUtils, entity, Accesory, Reservation) {
        var vm = this;

        vm.accesory = entity;
        vm.byteSize = DataUtils.byteSize;
        vm.openFile = DataUtils.openFile;

        var unsubscribe = $rootScope.$on('gCompanyApp:accesoryUpdate', function(event, result) {
            vm.accesory = result;
        });
        $scope.$on('$destroy', unsubscribe);
    }
})();
