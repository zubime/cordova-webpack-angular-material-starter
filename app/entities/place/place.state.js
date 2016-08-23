(function() {
    'use strict';

    angular
        .module('gCompanyApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider
        .state('place', {
            parent: 'entity',
            url: '/place?page&sort&search',
            data: {
                authorities: ['ROLE_USER'],
                pageTitle: 'gCompanyApp.place.home.title'
            },
            views: {
                'content@': {
                    templateUrl: 'app/entities/place/places.html',
                    controller: 'PlaceController',
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
                    $translatePartialLoader.addPart('place');
                    $translatePartialLoader.addPart('');
                    $translatePartialLoader.addPart('global');
                    return $translate.refresh();
                }]
            }
        })
        .state('place-detail', {
            parent: 'entity',
            url: '/place/{id}',
            data: {
                authorities: ['ROLE_USER'],
                pageTitle: 'gCompanyApp.place.detail.title'
            },
            views: {
                'content@': {
                    templateUrl: 'app/entities/place/place-detail.html',
                    controller: 'PlaceDetailController',
                    controllerAs: 'vm'
                }
            },
            resolve: {
                translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                    $translatePartialLoader.addPart('place');
                    $translatePartialLoader.addPart('');
                    return $translate.refresh();
                }],
                entity: ['$stateParams', 'Place', function($stateParams, Place) {
                    return Place.get({id : $stateParams.id}).$promise;
                }]
            }
        })
        .state('place.new', {
            parent: 'place',
            url: '/new',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/place/place-dialog.html',
                    controller: 'PlaceDialogController',
                    controllerAs: 'vm',
                    backdrop: 'static',
                    size: 'lg',
                    resolve: {
                        entity: function () {
                            return {
                                longName: null,
                                shortName: null,
                                country: null,
                                areaLvl1: null,
                                areaLvl2: null,
                                areaLvl3: null,
                                location: null,
                                loc: null,
                                id: null
                            };
                        }
                    }
                }).result.then(function() {
                    $state.go('place', null, { reload: true });
                }, function() {
                    $state.go('place');
                });
            }]
        })
        .state('place.edit', {
            parent: 'place',
            url: '/{id}/edit',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/place/place-dialog.html',
                    controller: 'PlaceDialogController',
                    controllerAs: 'vm',
                    backdrop: 'static',
                    size: 'lg',
                    resolve: {
                        entity: ['Place', function(Place) {
                            return Place.get({id : $stateParams.id}).$promise;
                        }]
                    }
                }).result.then(function() {
                    $state.go('place', null, { reload: true });
                }, function() {
                    $state.go('^');
                });
            }]
        })
        .state('place.delete', {
            parent: 'place',
            url: '/{id}/delete',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/place/place-delete-dialog.html',
                    controller: 'PlaceDeleteController',
                    controllerAs: 'vm',
                    size: 'md',
                    resolve: {
                        entity: ['Place', function(Place) {
                            return Place.get({id : $stateParams.id}).$promise;
                        }]
                    }
                }).result.then(function() {
                    $state.go('place', null, { reload: true });
                }, function() {
                    $state.go('^');
                });
            }]
        });
    }

})();
