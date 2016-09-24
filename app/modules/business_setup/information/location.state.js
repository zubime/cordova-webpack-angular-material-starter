'use strict';
var locations = require("ngtemplate!./locations.html");
var location_delete_dialog = require("ngtemplate!./delete/location-delete-dialog.html");
var location_dialog = require("ngtemplate!./dialog/location-dialog.html");


    export default function stateConfig($stateProvider) {
            'ngInject';
        $stateProvider
        .state('location', {
            parent: 'app',
            url: '/location?page&sort&search',
            data: {
                authorities: ['ROLE_USER'],
                pageTitle: 'gCompanyApp.location.home.title',
                fab:{
                  icon:'add',
                  state:'location.new'
                }
            },
            views: {
                'content@': {
                  templateProvider: function($templateCache,$log){
                    return $templateCache.get(locations);
                  },
                    controller: 'LocationController',
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
                    $translatePartialLoader.addPart('location');
                    $translatePartialLoader.addPart('global');
                    return $translate.refresh();
                }]
            }
        })


        .state('location.new', {
            parent: 'location',
            url: '/new',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$mdDialog','$templateCache', function($stateParams, $state, $mdDialog,$templateCache) {
                $mdDialog.show({
                    template: $templateCache.get(location_dialog),
                    controller: 'LocationDialogController',
                    controllerAs: 'vm',
                    backdrop: 'static',
                    fullscreen: true,
                    resolve: {
                        entity: function () {
                            return {
                                street: null,
                                streetNo: null,
                                code: null,
                                imageUrl: null,
                                name: null,
                                whyToVisit: null,
                                description: null,
                                website: null,
                                phoneNumber: null,
                                email: null,
                                image: null,
                                imageContentType: null,
                                logo: null,
                                logoContentType: null,
                                latitude: null,
                                longitude: null,
                                bigImage: null,
                                bigImageContentType: null,
                                reviewCount: null,
                                reviewAvg: null,
                                virtual: null,
                                companyId: null,
                                id: null,
                                point: [0,0]
                            };
                        }
                    }
                }).then(function() {
                    $state.go('location', null, { reload: true });
                }, function() {
                    $state.go('location');
                });
            }]
        })
        .state('location.edit', {
            parent: 'location',
            url: '/{id}/edit',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$mdDialog','$templateCache', function($stateParams, $state, $mdDialog,$templateCache) {
                $mdDialog.show({
                    template: $templateCache.get(location_dialog),
                    controller: 'LocationDialogController',
                    controllerAs: 'vm',
                    backdrop: 'static',
                    fullscreen: true,
                    resolve: {
                        entity: ['Location', function(Location) {
                            return Location.get({id : $stateParams.id}).$promise;
                        }]
                    }
                }).then(function() {
                    $state.go('location', null, { reload: true });
                }, function() {
                    $state.go('^');
                });
            }]
        })
        .state('location.delete', {
            parent: 'location',
            url: '/{id}/delete',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$mdDialog','$templateCache', function($stateParams, $state, $mdDialog,$templateCache) {
                $mdDialog.show({
                    template: $templateCache.get(location_delete_dialog),
                    controller: 'LocationDeleteController',
                    controllerAs: 'vm',
                    fullscreen: true,
                    resolve: {
                        entity: ['Location', function(Location) {
                            return Location.get({id : $stateParams.id}).$promise;
                        }]
                    }
                }).then(function() {
                    $state.go('location', null, { reload: true });
                }, function() {
                    $state.go('^');
                });
            }]
        });
    }
