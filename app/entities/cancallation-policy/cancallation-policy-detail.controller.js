(function() {
    'use strict';

    angular
        .module('gCompanyApp')
        .controller('CancallationPolicyDetailController', CancallationPolicyDetailController);

    CancallationPolicyDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'entity', 'CancallationPolicy'];

    function CancallationPolicyDetailController($scope, $rootScope, $stateParams, entity, CancallationPolicy) {
        var vm = this;

        vm.cancallationPolicy = entity;

        var unsubscribe = $rootScope.$on('gCompanyApp:cancallationPolicyUpdate', function(event, result) {
            vm.cancallationPolicy = result;
        });
        $scope.$on('$destroy', unsubscribe);
    }
})();
