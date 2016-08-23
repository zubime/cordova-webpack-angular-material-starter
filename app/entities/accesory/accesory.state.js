(function() {
    'use strict';

    angular
        .module('gCompanyApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider
        .state('accesory', {
            parent: 'entity',
            url: '/accesory',
            data: {
                authorities: ['ROLE_USER'],
                pageTitle: 'gCompanyApp.accesory.home.title'
            },
            views: {
                'content@': {
                    templateUrl: 'app/entities/accesory/accesories.html',
                    controller: 'AccesoryController',
                    controllerAs: 'vm'
                }
            },
            resolve: {
                translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                    $translatePartialLoader.addPart('accesory');
                    $translatePartialLoader.addPart('global');
                    return $translate.refresh();
                }]
            }
        })
        .state('accesory-detail', {
            parent: 'entity',
            url: '/accesory/{id}',
            data: {
                authorities: ['ROLE_USER'],
                pageTitle: 'gCompanyApp.accesory.detail.title'
            },
            views: {
                'content@': {
                    templateUrl: 'app/entities/accesory/accesory-detail.html',
                    controller: 'AccesoryDetailController',
                    controllerAs: 'vm'
                }
            },
            resolve: {
                translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                    $translatePartialLoader.addPart('accesory');
                    return $translate.refresh();
                }],
                entity: ['$stateParams', 'Accesory', function($stateParams, Accesory) {
                    return Accesory.get({id : $stateParams.id}).$promise;
                }]
            }
        })
        .state('accesory.new', {
            parent: 'accesory',
            url: '/new',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/accesory/accesory-dialog.html',
                    controller: 'AccesoryDialogController',
                    controllerAs: 'vm',
                    backdrop: 'static',
                    size: 'lg',
                    resolve: {
                        entity: function () {
                            return {
                                locationId: null,
                                serviceDetailId: null,
                                pricePerHour: null,
                                pricePerDay: null,
                                pricePerWeek: null,
                                currencyCode: null,
                                name: null,
                                image: null,
                                imageContentType: null,
                                id: null
                            };
                        }
                    }
                }).result.then(function() {
                    $state.go('accesory', null, { reload: true });
                }, function() {
                    $state.go('accesory');
                });
            }]
        })
        .state('accesory.edit', {
            parent: 'accesory',
            url: '/{id}/edit',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/accesory/accesory-dialog.html',
                    controller: 'AccesoryDialogController',
                    controllerAs: 'vm',
                    backdrop: 'static',
                    size: 'lg',
                    resolve: {
                        entity: ['Accesory', function(Accesory) {
                            return Accesory.get({id : $stateParams.id}).$promise;
                        }]
                    }
                }).result.then(function() {
                    $state.go('accesory', null, { reload: true });
                }, function() {
                    $state.go('^');
                });
            }]
        })
        .state('accesory.delete', {
            parent: 'accesory',
            url: '/{id}/delete',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/accesory/accesory-delete-dialog.html',
                    controller: 'AccesoryDeleteController',
                    controllerAs: 'vm',
                    size: 'md',
                    resolve: {
                        entity: ['Accesory', function(Accesory) {
                            return Accesory.get({id : $stateParams.id}).$promise;
                        }]
                    }
                }).result.then(function() {
                    $state.go('accesory', null, { reload: true });
                }, function() {
                    $state.go('^');
                });
            }]
        });
    }

})();
