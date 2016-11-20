'use strict';
var location_contact = require("ngtemplate!./contact/location-contact.html");
var location_hours = require("ngtemplate!./opening_hours/location-hours.html");
var location_location = require("ngtemplate!./location/location-location.html");
var location_marketing = require("ngtemplate!./marketing/location-marketing.html");


export default function stateConfig($stateProvider) {
        'ngInject;'
        debugger;
        $stateProvider
        .state('information.contact', {
            parent: 'information',
            url: '/contact',
            data: {
                authorities: ['ROLE_USER'],
                menu: {
                  icon: 'arrow_back',
                  state: '^'
                },
                pageTitle: 'gCompanyApp.location.detail.contact.title',
                pageDescription: 'gCompanyApp.location.detail.contact.description',
                nextState:'information.location',
                prevState:'information.hours'
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
        .state('information.hours', {
            parent: 'information',
            url: '/hours',
            data: {
                authorities: ['ROLE_USER'],
                menu: {
                  icon: 'arrow_back',
                  state: '^'
                },
                pageTitle: 'gCompanyApp.location.detail.hours.title',
                pageDescription: 'gCompanyApp.location.detail.hours.description',
                nextState:'information.contact',
                prevState:'information.marketing'
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
        .state('information.location', {
            parent: 'information',
            url: '/location',
            data: {
                authorities: ['ROLE_USER'],
                menu: {
                  icon: 'arrow_back',
                  state: '^'
                },
                pageTitle: 'gCompanyApp.location.detail.location.title',
                pageDescription: 'gCompanyApp.location.detail.location.description',
                nextState:'information.marketing',
                prevState:'information.contact'
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
        .state('information.marketing', {
            parent: 'information',
            url: '/marketing',
            data: {
                authorities: ['ROLE_USER'],
                menu: {
                  icon: 'arrow_back',
                  state: '^'
                },
                pageTitle: 'gCompanyApp.location.detail.marketing.title',
                pageDescription: 'gCompanyApp.location.detail.marketing.description',
                nextState:'information.hours',
                prevState:'information.location'
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
