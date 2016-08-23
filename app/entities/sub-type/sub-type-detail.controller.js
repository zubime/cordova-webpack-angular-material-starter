(function() {
    'use strict';

    angular
        .module('gCompanyApp')
        .controller('SubTypeDetailController', SubTypeDetailController);

    SubTypeDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'entity', 'SubType', 'Type'];

    function SubTypeDetailController($scope, $rootScope, $stateParams, entity, SubType, Type) {
        var vm = this;

        vm.subType = entity;

        var unsubscribe = $rootScope.$on('gCompanyApp:subTypeUpdate', function(event, result) {
            vm.subType = result;
        });
        $scope.$on('$destroy', unsubscribe);
    }
})();
