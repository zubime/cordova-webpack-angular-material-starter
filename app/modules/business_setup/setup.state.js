'use strict';
var template = require("ngtemplate!./setup.html");
var location_detail = require("ngtemplate!./location-detail.html");
var location_contact = require("ngtemplate!./information/views/location-contact.html");
var location_hours = require("ngtemplate!./information/views/location-hours.html");
var location_location = require("ngtemplate!./information/views/location-location.html");
var location_marketing = require("ngtemplate!./information/views/location-marketing.html");


    angular
        .module('gCompanyApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider.state('setup', {
            parent: 'app',
            url: '/setup',
            data: {
                authorities: ['ROLE_USER'],
                pageTitle: 'gCompanyApp.tag.home.title'
            },
            views: {
                'content@': {
                    templateProvider: function($templateCache,$log){
                      $log.info($templateCache.get(template));
                      return $templateCache.get(template);
                    } ,
                    controller: 'SetupController',
                    controllerAs: 'vm'
                }
            }
            ,
            resolve: {
                translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                    $translatePartialLoader.addPart('setup');
                    $translatePartialLoader.addPart('global');
                    return $translate.refresh();
                }]
            }
        })
        .state('location-detail', {
            parent: 'app',
            url: '/location/{id}',
            data: {
                authorities: ['ROLE_USER'],
                pageTitle: 'gCompanyApp.location.detail.title'
            },
            views: {
                'content@': {

                    templateProvider: function($templateCache,$log){
                      return $templateCache.get(template);
                    },
                    controller: 'LocationDialogController',
                    controllerAs: 'vm'
                }
            },
            resolve: {
                translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                    $translatePartialLoader.addPart('location');
                    return $translate.refresh();
                }],
                entity: ['$stateParams', 'Location', function($stateParams, Location) {
                    // return Location.get({id : $stateParams.id}).$promise;
                    return {name:'my location',
                    email: 'my email',
                    phoneNumber: '998 33 33 33',
                    website: 'www.kayak.com'
                    };
                }],
                previousState: ["$state", function ($state) {
                    var currentStateData = {
                        name: $state.current.name || 'location',
                        params: $state.params,
                        url: $state.href($state.current.name, $state.params)
                    };
                    return currentStateData;
                }]
            }
        })
        .state('location-detail.contact', {
            parent: 'location-detail',
            url: '/detail/contact',
            data: {
                authorities: ['ROLE_USER'],
                menu: {
                  icon: 'arrow_back',
                  state: '^'
                },
                pageTitle: 'gCompanyApp.location.detail.contact.title'
            },
            views: {
                'content@': {

                    templateProvider: function($templateCache,$log){
                      return $templateCache.get(location_contact);
                    },
                    controller: 'LocationDialogController',
                    controllerAs: 'vm'
                }
            },
            resolve: {
                previousState: ["$state", function ($state) {
                    var currentStateData = {
                        name: $state.current.name || 'location',
                        params: $state.params,
                        url: $state.href($state.current.name, $state.params)
                    };
                    return currentStateData;
                }]
            }
        })
        .state('location-detail.hours', {
            parent: 'location-detail',
            url: '/detail/hours',
            data: {
                authorities: ['ROLE_USER'],
                menu: {
                  icon: 'arrow_back',
                  state: '^'
                },
                pageTitle: 'gCompanyApp.location.detail.hours.title'
            },
            views: {
                'content@': {

                    templateProvider: function($templateCache,$log){
                      return $templateCache.get(location_hours);
                    },
                    controller: 'LocationDialogController',
                    controllerAs: 'vm'
                }
            },
            resolve: {
                previousState: ["$state", function ($state) {
                    var currentStateData = {
                        name: $state.current.name || 'location',
                        params: $state.params,
                        url: $state.href($state.current.name, $state.params)
                    };
                    return currentStateData;
                }]
            }
        })
        .state('location-detail.location', {
            parent: 'location-detail',
            url: '/detail/location',
            data: {
                authorities: ['ROLE_USER'],
                menu: {
                  icon: 'arrow_back',
                  state: '^'
                },
                pageTitle: 'gCompanyApp.location.detail.location.title'
            },
            views: {
                'content@': {

                    templateProvider: function($templateCache,$log){
                      return $templateCache.get(location_location);
                    },
                    controller: 'LocationDialogController',
                    controllerAs: 'vm'
                }
            },
            resolve: {
                previousState: ["$state", function ($state) {
                    var currentStateData = {
                        name: $state.current.name || 'location',
                        params: $state.params,
                        url: $state.href($state.current.name, $state.params)
                    };
                    return currentStateData;
                }]
            }
        })
        .state('location-detail.marketing', {
            parent: 'location-detail',
            url: '/detail/marketing',
            data: {
                authorities: ['ROLE_USER'],
                menu: {
                  icon: 'arrow_back',
                  state: '^'
                },
                pageTitle: 'gCompanyApp.location.detail.marketing.title'
            },
            views: {
                'content@': {

                    templateProvider: function($templateCache,$log){
                      return $templateCache.get(location_marketing);
                    },
                    controller: 'LocationDialogController',
                    controllerAs: 'vm'
                }
            },
            resolve: {
                previousState: ["$state", function ($state) {
                    var currentStateData = {
                        name: $state.current.name || 'location',
                        params: $state.params,
                        url: $state.href($state.current.name, $state.params)
                    };
                    return currentStateData;
                }]
            }
        })
        ;
    }
