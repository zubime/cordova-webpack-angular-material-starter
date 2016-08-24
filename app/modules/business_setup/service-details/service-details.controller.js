(function() {
    'use strict';

    angular
        .module('gCompanyApp')
        .controller('ServiceDetailsController', ServiceDetailsController);

    ServiceDetailsController.$inject = ['$scope', '$state', 'DataUtils', 'ServiceDetails', 'Location','$stateParams'];

    function ServiceDetailsController ($scope, $state, DataUtils, ServiceDetails, Location,$stateParams) {
        var vm = this;

        vm.serviceDetails = [];
        vm.openFile = DataUtils.openFile;
        vm.byteSize = DataUtils.byteSize;
        vm.locationId = $stateParams.locationId;

        vm.locations = Location.query();

        loadAll($stateParams.locationId);

        function loadAll(locationId) {
            ServiceDetails.query({'locationId':locationId},function(result) {
                vm.serviceDetails = result;
            });
        }


        $scope.$watch('vm.locationId', function(newValue, oldValue){
          $state.go('service-details',{locationId:newValue});
        });
    }
})();
