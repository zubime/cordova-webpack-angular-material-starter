(function() {
    'use strict';

    angular
        .module('gCompanyApp')
        .controller('GalleryController', GalleryController);

    GalleryController.$inject = ['$scope', '$state', 'Gallery'];

    function GalleryController ($scope, $state, Gallery) {
        var vm = this;
        
        vm.galleries = [];

        loadAll();

        function loadAll() {
            Gallery.query(function(result) {
                vm.galleries = result;
            });
        }
    }
})();
