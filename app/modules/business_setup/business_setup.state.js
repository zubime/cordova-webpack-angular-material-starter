'use strict';
var template = require("ngtemplate!./business-setup.html");
var location_detail = require("ngtemplate!./business-setup.html");
var location_contact = require("ngtemplate!./information/contact/location-contact.html");
var location_hours = require("ngtemplate!./information/opening_hours/location-hours.html");
var location_location = require("ngtemplate!./information/location/location-location.html");
var location_marketing = require("ngtemplate!./information/marketing/location-marketing.html");


export default function stateConfig($stateProvider) {
        $stateProvider
       
        .state('business-setup', {
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


        .state('business-setup.information',{
          parent: 'business-setup',
          url: '/information',
          data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'gCompanyApp.location.detail.information_title'
          }
        })
        .state('business-setup.personel',{
          parent: 'business-setup',
          url: '/personel',
          data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'gCompanyApp.location.detail.personel_title',
            fab:{
              icon:'add',
              state:'business-setup.personel.new'
            }

          }
        })



        ;
    }
