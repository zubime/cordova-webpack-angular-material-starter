(function() {
    'use strict';

    angular
        .module('gCompanyApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider
        .state('resource', {
            parent: 'business_setup',
            url: '/resource?page&sort&search',
            data: {
                authorities: ['ROLE_USER'],
                pageTitle: 'gCompanyApp.resource.home.title'
            },
            views: {
                'content@': {
                    templateUrl: 'app/entities/resource/resources.html',
                    controller: 'ResourceController',
                    controllerAs: 'vm'
                }
            },
            params: {
                page: {
                    value: '1',
                    squash: true
                },
                sort: {
                    value: 'id,asc',
                    squash: true
                },
                search: null
            },
            resolve: {
                pagingParams: ['$stateParams', 'PaginationUtil', function ($stateParams, PaginationUtil) {
                    return {
                        page: PaginationUtil.parsePage($stateParams.page),
                        sort: $stateParams.sort,
                        predicate: PaginationUtil.parsePredicate($stateParams.sort),
                        ascending: PaginationUtil.parseAscending($stateParams.sort),
                        search: $stateParams.search
                    };
                }],
                translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                    $translatePartialLoader.addPart('resource');
                    $translatePartialLoader.addPart('global');
                    return $translate.refresh();
                }]
            }
        })
        .state('resource-detail', {
            parent: 'business_setup',
            url: '/resource/{id}',
            data: {
                authorities: ['ROLE_USER'],
                pageTitle: 'gCompanyApp.resource.detail.title'
            },
            views: {
                'content@': {
                    templateUrl: 'app/entities/resource/resource-detail.html',
                    controller: 'ResourceDetailController',
                    controllerAs: 'vm'
                }
            },
            resolve: {
                translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                    $translatePartialLoader.addPart('resource');
                    return $translate.refresh();
                }],
                entity: ['$stateParams', 'Resource', function($stateParams, Resource) {
                    return Resource.get({id : $stateParams.id}).$promise;
                }]
            }
        })
        .state('resource.new', {
            parent: 'resource',
            url: '/new',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/resource/resource-dialog.html',
                    controller: 'ResourceDialogController',
                    controllerAs: 'vm',
                    backdrop: 'static',
                    size: 'lg',
                    resolve: {
                        entity: function () {
                            return {
                                locationId: null,
                                serviceDetailId: null,
                                typeId: null,
                                subTypeId: null,
                                pricePerHour: null,
                                pricePerDay: null,
                                pricePerWeek: null,
                                currencyCode: null,
                                name: null,
                                generalFeatures: null,
                                galleryId: null,
                                image: null,
                                imageContentType: null,
                                id: null
                            };
                        }
                    }
                }).result.then(function() {
                    $state.go('resource', null, { reload: true });
                }, function() {
                    $state.go('resource');
                });
            }]
        })
        .state('resource.edit', {
            parent: 'resource',
            url: '/{id}/edit',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/resource/resource-dialog.html',
                    controller: 'ResourceDialogController',
                    controllerAs: 'vm',
                    backdrop: 'static',
                    size: 'lg',
                    resolve: {
                        entity: ['Resource', function(Resource) {
                            return Resource.get({id : $stateParams.id}).$promise;
                        }]
                    }
                }).result.then(function() {
                    $state.go('resource', null, { reload: true });
                }, function() {
                    $state.go('^');
                });
            }]
        })
        .state('resource.delete', {
            parent: 'resource',
            url: '/{id}/delete',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/resource/resource-delete-dialog.html',
                    controller: 'ResourceDeleteController',
                    controllerAs: 'vm',
                    size: 'md',
                    resolve: {
                        entity: ['Resource', function(Resource) {
                            return Resource.get({id : $stateParams.id}).$promise;
                        }]
                    }
                }).result.then(function() {
                    $state.go('resource', null, { reload: true });
                }, function() {
                    $state.go('^');
                });
            }]
        });
    }

})();
