'use strict';
var template = require("ngtemplate!./setup.html");


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
        });
    }
