(function() {
    'use strict';

    angular
        .module('gCompanyApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider
        .state('cancallation-policy', {
            parent: 'entity',
            url: '/cancallation-policy',
            data: {
                authorities: ['ROLE_USER'],
                pageTitle: 'gCompanyApp.cancallationPolicy.home.title'
            },
            views: {
                'content@': {
                    templateUrl: 'app/entities/cancallation-policy/cancallation-policies.html',
                    controller: 'CancallationPolicyController',
                    controllerAs: 'vm'
                }
            },
            resolve: {
                translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                    $translatePartialLoader.addPart('cancallationPolicy');
                    $translatePartialLoader.addPart('global');
                    return $translate.refresh();
                }]
            }
        })
        .state('cancallation-policy-detail', {
            parent: 'entity',
            url: '/cancallation-policy/{id}',
            data: {
                authorities: ['ROLE_USER'],
                pageTitle: 'gCompanyApp.cancallationPolicy.detail.title'
            },
            views: {
                'content@': {
                    templateUrl: 'app/entities/cancallation-policy/cancallation-policy-detail.html',
                    controller: 'CancallationPolicyDetailController',
                    controllerAs: 'vm'
                }
            },
            resolve: {
                translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                    $translatePartialLoader.addPart('cancallationPolicy');
                    return $translate.refresh();
                }],
                entity: ['$stateParams', 'CancallationPolicy', function($stateParams, CancallationPolicy) {
                    return CancallationPolicy.get({id : $stateParams.id}).$promise;
                }]
            }
        })
        .state('cancallation-policy.new', {
            parent: 'cancallation-policy',
            url: '/new',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/cancallation-policy/cancallation-policy-dialog.html',
                    controller: 'CancallationPolicyDialogController',
                    controllerAs: 'vm',
                    backdrop: 'static',
                    size: 'lg',
                    resolve: {
                        entity: function () {
                            return {
                                locationId: null,
                                name: null,
                                daysBefore: null,
                                cancelFeePercent: null,
                                id: null
                            };
                        }
                    }
                }).result.then(function() {
                    $state.go('cancallation-policy', null, { reload: true });
                }, function() {
                    $state.go('cancallation-policy');
                });
            }]
        })
        .state('cancallation-policy.edit', {
            parent: 'cancallation-policy',
            url: '/{id}/edit',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/cancallation-policy/cancallation-policy-dialog.html',
                    controller: 'CancallationPolicyDialogController',
                    controllerAs: 'vm',
                    backdrop: 'static',
                    size: 'lg',
                    resolve: {
                        entity: ['CancallationPolicy', function(CancallationPolicy) {
                            return CancallationPolicy.get({id : $stateParams.id}).$promise;
                        }]
                    }
                }).result.then(function() {
                    $state.go('cancallation-policy', null, { reload: true });
                }, function() {
                    $state.go('^');
                });
            }]
        })
        .state('cancallation-policy.delete', {
            parent: 'cancallation-policy',
            url: '/{id}/delete',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/cancallation-policy/cancallation-policy-delete-dialog.html',
                    controller: 'CancallationPolicyDeleteController',
                    controllerAs: 'vm',
                    size: 'md',
                    resolve: {
                        entity: ['CancallationPolicy', function(CancallationPolicy) {
                            return CancallationPolicy.get({id : $stateParams.id}).$promise;
                        }]
                    }
                }).result.then(function() {
                    $state.go('cancallation-policy', null, { reload: true });
                }, function() {
                    $state.go('^');
                });
            }]
        });
    }

})();
