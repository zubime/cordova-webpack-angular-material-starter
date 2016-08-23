(function() {
    'use strict';

    angular
        .module('gCompanyApp')
        .controller('TagDetailController', TagDetailController);

    TagDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'entity', 'Tag', 'Article'];

    function TagDetailController($scope, $rootScope, $stateParams, entity, Tag, Article) {
        var vm = this;

        vm.tag = entity;

        var unsubscribe = $rootScope.$on('gCompanyApp:tagUpdate', function(event, result) {
            vm.tag = result;
        });
        $scope.$on('$destroy', unsubscribe);
    }
})();
