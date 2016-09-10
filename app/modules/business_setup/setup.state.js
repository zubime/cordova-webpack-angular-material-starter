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
            abstract: true,
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
        .state('location-detail.information',{
          parent: 'location-detail',
          url: '/information',
          data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'gCompanyApp.location.detail.information_title'
          }
        })
        .state('location-detail.service',{
          parent: 'location-detail',
          url: '/service',
          data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'gCompanyApp.location.detail.service_title',
            fab:{
              icon:'face',
              state:'location-detail.service.new'
            }

          }
        })
        .state('location-detail.service.new',{
          parent: 'location-detail.service',
          url: '/new',
          data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'gCompanyApp.location.detail.service_title',
            fab:{
              icon:'add',
              state:'location-detail.service.new'
            }

          }
        })
        .state('location-detail.equipment',{
          parent: 'location-detail',
          url: '/equipment',
          data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'gCompanyApp.location.detail.equipment_title',
            fab:{
              icon:'add',
              state:'location-detail.equipment.new'
            }

          }
        })
        .state('location-detail.equipment.new',{
          parent: 'location-detail.equipment',
          url: '/new',
          data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'gCompanyApp.location.detail.equipment_title',
            fab:{
              icon:'save',
              state:'location.new'
            }

          }
        })
        .state('location-detail.personel',{
          parent: 'location-detail',
          url: '/personel',
          data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'gCompanyApp.location.detail.personel_title',
            fab:{
              icon:'add',
              state:'location-detail.personel.new'
            }

          }
        })
        .state('location-detail.personel.new',{
          parent: 'location-detail.personel',
          url: '/new',
          data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'gCompanyApp.location.detail.personel_title',
            fab:{
              icon:'save',
              state:'location.new'
            }

          }
        })
        .state('location-detail.information.contact', {
            parent: 'location-detail.information',
            url: '/contact',
            data: {
                authorities: ['ROLE_USER'],
                menu: {
                  icon: 'arrow_back',
                  state: '^'
                },
                pageTitle: 'gCompanyApp.location.detail.contact.title',
                pageDescription: 'gCompanyApp.location.detail.contact.description',
                nextState:'location-detail.information.location',
                prevState:'location-detail.information.hours'
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
        .state('location-detail.information.hours', {
            parent: 'location-detail.information',
            url: '/hours',
            data: {
                authorities: ['ROLE_USER'],
                menu: {
                  icon: 'arrow_back',
                  state: '^'
                },
                pageTitle: 'gCompanyApp.location.detail.hours.title',
                pageDescription: 'gCompanyApp.location.detail.hours.description',
                nextState:'location-detail.information.contact',
                prevState:'location-detail.information.marketing'
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
        .state('location-detail.information.location', {
            parent: 'location-detail.information',
            url: '/location',
            data: {
                authorities: ['ROLE_USER'],
                menu: {
                  icon: 'arrow_back',
                  state: '^'
                },
                pageTitle: 'gCompanyApp.location.detail.location.title',
                pageDescription: 'gCompanyApp.location.detail.location.description',
                nextState:'location-detail.information.marketing',
                prevState:'location-detail.information.contact'
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
        .state('location-detail.information.marketing', {
            parent: 'location-detail.information',
            url: '/marketing',
            data: {
                authorities: ['ROLE_USER'],
                menu: {
                  icon: 'arrow_back',
                  state: '^'
                },
                pageTitle: 'gCompanyApp.location.detail.marketing.title',
                pageDescription: 'gCompanyApp.location.detail.marketing.description',
                nextState:'location-detail.information.hours',
                prevState:'location-detail.information.location'
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
