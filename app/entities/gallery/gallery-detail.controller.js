(function() {
    'use strict';

    angular
        .module('gCompanyApp')
        .controller('GalleryDetailController', GalleryDetailController);

    GalleryDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'entity', 'Gallery', 'Upload', '$timeout'];

    function GalleryDetailController($scope, $rootScope, $stateParams, entity, Gallery, Upload, $timeout) {
        var vm = this;

        vm.gallery = entity;

        var unsubscribe = $rootScope.$on('gCompanyApp:galleryUpdate', function(event, result) {
            vm.gallery = result;
        });
        $scope.$on('$destroy', unsubscribe);

        $scope.$watch('files', function () {
            $scope.upload($scope.files);
        });

        $scope.log = '';

        $scope.upload = function (files) {
            if (files && files.length) {
                for (var i = 0; i < files.length; i++) {
                  var file = files[i];
                  if (!file.$error) {
                    Upload.upload({
                        url: '/m_gallery/api/gallery/'+vm.gallery.id+'/image',
                        data: {
                          file: file,
                          filename: 'file.name',
                          mediaType: file.type,
                          galleryName: vm.gallery.id
                        }

                    }).then(function (resp) {
                        $timeout(function() {
                            $scope.log = 'file: ' +
                            resp.config.data.file.name +
                            ', Response: ' + JSON.stringify(resp.data) +
                            '\n' + $scope.log;
                        });
                    }, null, function (evt) {
                        var progressPercentage = parseInt(100.0 *
                            evt.loaded / evt.total);
                        $scope.log = 'progress: ' + progressPercentage +
                          '% ' + evt.config.data.file.name + '\n' +
                          $scope.log;
                    });
                  }
                }
            }
        };
    }
})();
