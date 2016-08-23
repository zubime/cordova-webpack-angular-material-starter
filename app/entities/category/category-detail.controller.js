(function() {
    'use strict';

    angular
        .module('gCompanyApp')
        .controller('CategoryDetailController', CategoryDetailController);

    CategoryDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'entity', 'Category', 'Type'];

    function CategoryDetailController($scope, $rootScope, $stateParams, entity, Category, Type) {
        var vm = this;

        vm.category = entity;

        var unsubscribe = $rootScope.$on('gCompanyApp:categoryUpdate', function(event, result) {
            vm.category = result;
        });
        $scope.$on('$destroy', unsubscribe);
    }
})();
