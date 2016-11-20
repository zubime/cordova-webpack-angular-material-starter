'use strict';
var status = require("ngtemplate!./status.html");

function stateConfig($stateProvider) {
    $stateProvider
    .state('status', {
        parent: 'app',
        url: '/status',
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'gCompanyApp.tag.home.title'
        },
        views: {
            'content@': {
                templateProvider: function($templateCache,$log){
                  return $templateCache.get(status);
                } ,
                controller: 'StatusController',
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
    ;
}
stateConfig.$inject = ['$stateProvider'];

export { stateConfig };
