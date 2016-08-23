(function() {
    'use strict';

    angular
        .module('gCompanyApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider
        .state('currency', {
            parent: 'entity',
            url: '/currency',
            data: {
                authorities: ['ROLE_USER'],
                pageTitle: 'gCompanyApp.currency.home.title'
            },
            views: {
                'content@': {
                    templateUrl: 'app/entities/currency/currencies.html',
                    controller: 'CurrencyController',
                    controllerAs: 'vm'
                }
            },
            resolve: {
                translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                    $translatePartialLoader.addPart('currency');
                    $translatePartialLoader.addPart('global');
                    return $translate.refresh();
                }]
            }
        })
        .state('currency-detail', {
            parent: 'entity',
            url: '/currency/{id}',
            data: {
                authorities: ['ROLE_USER'],
                pageTitle: 'gCompanyApp.currency.detail.title'
            },
            views: {
                'content@': {
                    templateUrl: 'app/entities/currency/currency-detail.html',
                    controller: 'CurrencyDetailController',
                    controllerAs: 'vm'
                }
            },
            resolve: {
                translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                    $translatePartialLoader.addPart('currency');
                    return $translate.refresh();
                }],
                entity: ['$stateParams', 'Currency', function($stateParams, Currency) {
                    return Currency.get({id : $stateParams.id}).$promise;
                }]
            }
        })
        .state('currency.new', {
            parent: 'currency',
            url: '/new',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/currency/currency-dialog.html',
                    controller: 'CurrencyDialogController',
                    controllerAs: 'vm',
                    backdrop: 'static',
                    size: 'lg',
                    resolve: {
                        entity: function () {
                            return {
                                currencyCode: null,
                                currencyName: null,
                                id: null
                            };
                        }
                    }
                }).result.then(function() {
                    $state.go('currency', null, { reload: true });
                }, function() {
                    $state.go('currency');
                });
            }]
        })
        .state('currency.edit', {
            parent: 'currency',
            url: '/{id}/edit',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/currency/currency-dialog.html',
                    controller: 'CurrencyDialogController',
                    controllerAs: 'vm',
                    backdrop: 'static',
                    size: 'lg',
                    resolve: {
                        entity: ['Currency', function(Currency) {
                            return Currency.get({id : $stateParams.id}).$promise;
                        }]
                    }
                }).result.then(function() {
                    $state.go('currency', null, { reload: true });
                }, function() {
                    $state.go('^');
                });
            }]
        })
        .state('currency.delete', {
            parent: 'currency',
            url: '/{id}/delete',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/currency/currency-delete-dialog.html',
                    controller: 'CurrencyDeleteController',
                    controllerAs: 'vm',
                    size: 'md',
                    resolve: {
                        entity: ['Currency', function(Currency) {
                            return Currency.get({id : $stateParams.id}).$promise;
                        }]
                    }
                }).result.then(function() {
                    $state.go('currency', null, { reload: true });
                }, function() {
                    $state.go('^');
                });
            }]
        });
    }

})();
