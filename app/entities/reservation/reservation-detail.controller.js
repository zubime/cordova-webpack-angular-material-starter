(function() {
    'use strict';

    angular
        .module('gCompanyApp')
        .controller('ReservationDetailController', ReservationDetailController);

    ReservationDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'entity', 'Reservation', 'Accesory', 'Resource'];

    function ReservationDetailController($scope, $rootScope, $stateParams, entity, Reservation, Accesory, Resource) {
        var vm = this;

        vm.reservation = entity;

        var unsubscribe = $rootScope.$on('gCompanyApp:reservationUpdate', function(event, result) {
            vm.reservation = result;
        });
        $scope.$on('$destroy', unsubscribe);
    }
})();
