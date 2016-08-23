(function() {
    'use strict';

    angular
        .module('gCompanyApp')
        .controller('TypeController', TypeController);

    TypeController.$inject = ['$scope', '$state', 'Type'];

    function TypeController ($scope, $state, Type) {
        var vm = this;
        
        vm.types = [];

        loadAll();

        function loadAll() {
            Type.query(function(result) {
                vm.types = result;
            });
        }
    }
})();
