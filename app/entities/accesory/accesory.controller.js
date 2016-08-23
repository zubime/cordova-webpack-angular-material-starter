(function() {
    'use strict';

    angular
        .module('gCompanyApp')
        .controller('AccesoryController', AccesoryController);

    AccesoryController.$inject = ['$scope', '$state', 'DataUtils', 'Accesory'];

    function AccesoryController ($scope, $state, DataUtils, Accesory) {
        var vm = this;
        
        vm.accesories = [];
        vm.openFile = DataUtils.openFile;
        vm.byteSize = DataUtils.byteSize;

        loadAll();

        function loadAll() {
            Accesory.query(function(result) {
                vm.accesories = result;
            });
        }
    }
})();
