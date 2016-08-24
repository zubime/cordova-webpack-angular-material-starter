'use strict';
require("./layouts/navbar");
var navbarTemplate = require("ngtemplate!./layouts/navbar/navbar.html");


    angular
        .module('gCompanyApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider.state('app', {
            abstract: true,
            resolve: {
                // authorize: ['Auth',
                //     function (Auth) {
                //         return Auth.authorize();
                //     }
                // ],
                translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                    $translatePartialLoader.addPart('global');
                }]
            }
        });
    }
