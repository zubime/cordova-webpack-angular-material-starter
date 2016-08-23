(function() {
    'use strict';

    angular
        .module('gCompanyApp')
        .controller('ReviewDetailController', ReviewDetailController);

    ReviewDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'entity', 'Review'];

    function ReviewDetailController($scope, $rootScope, $stateParams, entity, Review) {
        var vm = this;

        vm.review = entity;

        var unsubscribe = $rootScope.$on('gCompanyApp:reviewUpdate', function(event, result) {
            vm.review = result;
        });
        $scope.$on('$destroy', unsubscribe);
    }
})();
