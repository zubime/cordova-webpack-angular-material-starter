
    'use strict';


export default function stateConfig($stateProvider) {
        'ngInject';
        $stateProvider
        .state('service-details', {
            parent: 'business-setup',
            url: '/location/{locationId}/service-details',
            data: {
                authorities: ['ROLE_USER'],
                pageTitle: 'gCompanyApp.serviceDetails.home.title',
                fab:{
                icon:'add',
                state:'business-setup.service.new'
                }
            },
            // views: {
            //     'content@': {
            //         templateUrl: 'app/entities/service-details/service-details.html',
            //         controller: 'ServiceDetailsController',
            //         controllerAs: 'vm'
            //     }
            // },
            resolve: {
                translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                    $translatePartialLoader.addPart('serviceDetails');
                    $translatePartialLoader.addPart('global');
                    return $translate.refresh();
                }]
            }
        })
        .state('service-details-detail', {
            parent: 'business-setup',
            url: '/location/{locationId}/service-details/{id}',
            data: {
                authorities: ['ROLE_USER'],
                pageTitle: 'gCompanyApp.serviceDetails.detail.title'
            },
            views: {
                'content@': {
                    templateUrl: 'app/entities/service-details/service-details-detail.html',
                    controller: 'ServiceDetailsDetailController',
                    controllerAs: 'vm'
                }
            },
            resolve: {
                translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                    $translatePartialLoader.addPart('serviceDetails');
                    return $translate.refresh();
                }],
                entity: ['$stateParams', 'ServiceDetails', function($stateParams, ServiceDetails) {
                    return ServiceDetails.get({locationId: $stateParams.locationId,id : $stateParams.id}).$promise;
                }]
            }
        })
        .state('service-details.new', {
            parent: 'service-details',
            url: '/new',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/service-details/service-details-dialog.html',
                    controller: 'ServiceDetailsDialogController',
                    controllerAs: 'vm',
                    backdrop: 'static',
                    size: 'lg',
                    resolve: {
                        entity: ['$stateParams', 'ServiceDetails', function($stateParams, ServiceDetails) {
                            return {
                                name: null,
                                description: null,
                                priceFrom: null,
                                priceTo: null,
                                image: null,
                                imageContentType: null,
                                id: null,
                                type: null,
                                subType: null,
                                locationId: $stateParams.locationId
                            };
                        }]
                    }
                }).result.then(function() {
                    $state.go('service-details', null, { reload: true });
                }, function() {
                    $state.go('service-details');
                });
            }]
        })
        .state('service-details.edit', {
            parent: 'service-details',
            url: '/{id}/edit',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/service-details/service-details-dialog.html',
                    controller: 'ServiceDetailsDialogController',
                    controllerAs: 'vm',
                    backdrop: 'static',
                    size: 'lg',
                    resolve: {
                        entity: ['ServiceDetails', function(ServiceDetails) {
                            return ServiceDetails.get({locationId: $stateParams.locationId, id : $stateParams.id}).$promise;
                        }]
                    }
                }).result.then(function() {
                    $state.go('service-details', null, { reload: true });
                }, function() {
                    $state.go('^');
                });
            }]
        })
        .state('service-details.delete', {
            parent: 'service-details',
            url: '/{id}/delete',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/service-details/service-details-delete-dialog.html',
                    controller: 'ServiceDetailsDeleteController',
                    controllerAs: 'vm',
                    size: 'md',
                    resolve: {
                        entity: ['ServiceDetails', function(ServiceDetails) {
                            return ServiceDetails.get({locationId: $stateParams.locationId, id : $stateParams.id}).$promise;
                        }]
                    }
                }).result.then(function() {
                    $state.go('service-details', null, { reload: true });
                }, function() {
                    $state.go('^');
                });
            }]
        });
    }
