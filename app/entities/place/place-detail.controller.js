(function() {
    'use strict';

    angular
        .module('gCompanyApp')
        .controller('PlaceDetailController', PlaceDetailController);

    PlaceDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'entity', 'Place'];

    function PlaceDetailController($scope, $rootScope, $stateParams, entity, Place) {
        var vm = this;

        vm.place = entity;

        var unsubscribe = $rootScope.$on('gCompanyApp:placeUpdate', function(event, result) {
            vm.place = result;
        });
        $scope.$on('$destroy', unsubscribe);
    }
})();
