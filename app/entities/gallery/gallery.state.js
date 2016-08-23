(function() {
    'use strict';

    angular
        .module('gCompanyApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider
        .state('gallery', {
            parent: 'entity',
            url: '/gallery',
            data: {
                authorities: ['ROLE_USER'],
                pageTitle: 'gCompanyApp.gallery.home.title'
            },
            views: {
                'content@': {
                    templateUrl: 'app/entities/gallery/galleries.html',
                    controller: 'GalleryController',
                    controllerAs: 'vm'
                }
            },
            resolve: {
                translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                    $translatePartialLoader.addPart('gallery');
                    $translatePartialLoader.addPart('global');
                    return $translate.refresh();
                }]
            }
        })
        .state('gallery-detail', {
            parent: 'entity',
            url: '/gallery/{id}',
            data: {
                authorities: ['ROLE_USER'],
                pageTitle: 'gCompanyApp.gallery.detail.title'
            },
            views: {
                'content@': {
                    templateUrl: 'app/entities/gallery/gallery-detail.html',
                    controller: 'GalleryDetailController',
                    controllerAs: 'vm'
                }
            },
            resolve: {
                translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                    $translatePartialLoader.addPart('gallery');
                    return $translate.refresh();
                }],
                entity: ['$stateParams', 'Gallery', function($stateParams, Gallery) {
                    return Gallery.get({id : $stateParams.id}).$promise;
                }]
            }
        })
        .state('gallery.new', {
            parent: 'gallery',
            url: '/new',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/gallery/gallery-dialog.html',
                    controller: 'GalleryDialogController',
                    controllerAs: 'vm',
                    backdrop: 'static',
                    size: 'lg',
                    resolve: {
                        entity: function () {
                            return {
                                name: null,
                                description: null,
                                id: null
                            };
                        }
                    }
                }).result.then(function() {
                    $state.go('gallery', null, { reload: true });
                }, function() {
                    $state.go('gallery');
                });
            }]
        })
        .state('gallery.edit', {
            parent: 'gallery',
            url: '/{id}/edit',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/gallery/gallery-dialog.html',
                    controller: 'GalleryDialogController',
                    controllerAs: 'vm',
                    backdrop: 'static',
                    size: 'lg',
                    resolve: {
                        entity: ['Gallery', function(Gallery) {
                            return Gallery.get({id : $stateParams.id}).$promise;
                        }]
                    }
                }).result.then(function() {
                    $state.go('gallery', null, { reload: true });
                }, function() {
                    $state.go('^');
                });
            }]
        })
        .state('gallery.delete', {
            parent: 'gallery',
            url: '/{id}/delete',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/gallery/gallery-delete-dialog.html',
                    controller: 'GalleryDeleteController',
                    controllerAs: 'vm',
                    size: 'md',
                    resolve: {
                        entity: ['Gallery', function(Gallery) {
                            return Gallery.get({id : $stateParams.id}).$promise;
                        }]
                    }
                }).result.then(function() {
                    $state.go('gallery', null, { reload: true });
                }, function() {
                    $state.go('^');
                });
            }]
        });
    }

})();
