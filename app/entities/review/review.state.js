(function() {
    'use strict';

    angular
        .module('gCompanyApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider
        .state('review', {
            parent: 'entity',
            url: '/review?page&sort&search',
            data: {
                authorities: ['ROLE_USER'],
                pageTitle: 'gCompanyApp.review.home.title'
            },
            views: {
                'content@': {
                    templateUrl: 'app/entities/review/reviews.html',
                    controller: 'ReviewController',
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
                    $translatePartialLoader.addPart('review');
                    $translatePartialLoader.addPart('global');
                    return $translate.refresh();
                }]
            }
        })
        .state('review-detail', {
            parent: 'entity',
            url: '/review/{id}',
            data: {
                authorities: ['ROLE_USER'],
                pageTitle: 'gCompanyApp.review.detail.title'
            },
            views: {
                'content@': {
                    templateUrl: 'app/entities/review/review-detail.html',
                    controller: 'ReviewDetailController',
                    controllerAs: 'vm'
                }
            },
            resolve: {
                translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                    $translatePartialLoader.addPart('review');
                    return $translate.refresh();
                }],
                entity: ['$stateParams', 'Review', function($stateParams, Review) {
                    return Review.get({id : $stateParams.id}).$promise;
                }]
            }
        })
        .state('review.new', {
            parent: 'review',
            url: '/new',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/review/review-dialog.html',
                    controller: 'ReviewDialogController',
                    controllerAs: 'vm',
                    backdrop: 'static',
                    size: 'lg',
                    resolve: {
                        entity: function () {
                            return {
                                locationGrade: null,
                                serviceGrade: null,
                                staffGrade: null,
                                priceGrade: null,
                                description: null,
                                date: null,
                                username: null,
                                locationId: null,
                                id: null
                            };
                        }
                    }
                }).result.then(function() {
                    $state.go('review', null, { reload: true });
                }, function() {
                    $state.go('review');
                });
            }]
        })
        .state('review.edit', {
            parent: 'review',
            url: '/{id}/edit',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/review/review-dialog.html',
                    controller: 'ReviewDialogController',
                    controllerAs: 'vm',
                    backdrop: 'static',
                    size: 'lg',
                    resolve: {
                        entity: ['Review', function(Review) {
                            return Review.get({id : $stateParams.id}).$promise;
                        }]
                    }
                }).result.then(function() {
                    $state.go('review', null, { reload: true });
                }, function() {
                    $state.go('^');
                });
            }]
        })
        .state('review.delete', {
            parent: 'review',
            url: '/{id}/delete',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/review/review-delete-dialog.html',
                    controller: 'ReviewDeleteController',
                    controllerAs: 'vm',
                    size: 'md',
                    resolve: {
                        entity: ['Review', function(Review) {
                            return Review.get({id : $stateParams.id}).$promise;
                        }]
                    }
                }).result.then(function() {
                    $state.go('review', null, { reload: true });
                }, function() {
                    $state.go('^');
                });
            }]
        });
    }

})();
