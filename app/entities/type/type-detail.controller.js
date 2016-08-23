(function() {
    'use strict';

    angular
        .module('gCompanyApp')
        .controller('TypeDetailController', TypeDetailController);

    TypeDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'entity', 'Type'];

    function TypeDetailController($scope, $rootScope, $stateParams, entity, Type) {
        var vm = this;

        vm.type = entity;

        var unsubscribe = $rootScope.$on('gCompanyApp:typeUpdate', function(event, result) {
            vm.type = result;
        });
        $scope.$on('$destroy', unsubscribe);
    }
})();
