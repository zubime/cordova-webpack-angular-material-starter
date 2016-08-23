(function() {
    'use strict';

    angular
        .module('gCompanyApp')
        .controller('ArticleDetailController', ArticleDetailController);

    ArticleDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'entity', 'Article', 'Tag', 'Location'];

    function ArticleDetailController($scope, $rootScope, $stateParams, entity, Article, Tag, Location) {
        var vm = this;

        vm.article = entity;

        var unsubscribe = $rootScope.$on('gCompanyApp:articleUpdate', function(event, result) {
            vm.article = result;
        });
        $scope.$on('$destroy', unsubscribe);
    }
})();
