(function() {
    'use strict';

    angular
        .module('gCompanyApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider
        .state('reservation', {
            parent: 'entity',
            url: '/reservation?page&sort&search',
            data: {
                authorities: ['ROLE_USER'],
                pageTitle: 'gCompanyApp.reservation.home.title'
            },
            views: {
                'content@': {
                    templateUrl: 'app/entities/reservation/reservations.html',
                    controller: 'ReservationController',
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
                    $translatePartialLoader.addPart('reservation');
                    $translatePartialLoader.addPart('global');
                    return $translate.refresh();
                }]
            }
        })
        .state('reservation-detail', {
            parent: 'entity',
            url: '/reservation/{id}',
            data: {
                authorities: ['ROLE_USER'],
                pageTitle: 'gCompanyApp.reservation.detail.title'
            },
            views: {
                'content@': {
                    templateUrl: 'app/entities/reservation/reservation-detail.html',
                    controller: 'ReservationDetailController',
                    controllerAs: 'vm'
                }
            },
            resolve: {
                translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                    $translatePartialLoader.addPart('reservation');
                    return $translate.refresh();
                }],
                entity: ['$stateParams', 'Reservation', function($stateParams, Reservation) {
                    return Reservation.get({id : $stateParams.id}).$promise;
                }]
            }
        })
        .state('reservation.new', {
            parent: 'reservation',
            url: '/new',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/reservation/reservation-dialog.html',
                    controller: 'ReservationDialogController',
                    controllerAs: 'vm',
                    backdrop: 'static',
                    size: 'lg',
                    resolve: {
                        entity: function () {
                            return {
                                locationId: null,
                                dateFrom: null,
                                dateTo: null,
                                userId: null,
                                price: null,
                                currencyCode: null,
                                isPaid: null,
                                id: null
                            };
                        }
                    }
                }).result.then(function() {
                    $state.go('reservation', null, { reload: true });
                }, function() {
                    $state.go('reservation');
                });
            }]
        })
        .state('reservation.edit', {
            parent: 'reservation',
            url: '/{id}/edit',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/reservation/reservation-dialog.html',
                    controller: 'ReservationDialogController',
                    controllerAs: 'vm',
                    backdrop: 'static',
                    size: 'lg',
                    resolve: {
                        entity: ['Reservation', function(Reservation) {
                            return Reservation.get({id : $stateParams.id}).$promise;
                        }]
                    }
                }).result.then(function() {
                    $state.go('reservation', null, { reload: true });
                }, function() {
                    $state.go('^');
                });
            }]
        })
        .state('reservation.delete', {
            parent: 'reservation',
            url: '/{id}/delete',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/reservation/reservation-delete-dialog.html',
                    controller: 'ReservationDeleteController',
                    controllerAs: 'vm',
                    size: 'md',
                    resolve: {
                        entity: ['Reservation', function(Reservation) {
                            return Reservation.get({id : $stateParams.id}).$promise;
                        }]
                    }
                }).result.then(function() {
                    $state.go('reservation', null, { reload: true });
                }, function() {
                    $state.go('^');
                });
            }]
        });
    }

})();
