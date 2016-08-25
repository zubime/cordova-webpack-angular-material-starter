'use strict';



import AppCtrl from './app-controller.js'

var angular = require('angular');
    angular
        .module('gCompanyApp', [
            'ngStorage',
            'tmh.dynamicLocale',
            'pascalprecht.translate',
            'ngResource',
            'ngAria',
            'ngFileUpload',
            'ui.router',
            // jhipster-needle-angularjs-add-module JHipster will add new module here
            'ngMaterial',
            'ui.router'
        ])
        .config(function($mdThemingProvider,$mdIconProvider) {
          $mdThemingProvider.theme('default')
            .primaryPalette('pink')
            .accentPalette('orange');
            $mdThemingProvider.theme('dark-grey')
            .backgroundPalette('grey').dark();
            $mdThemingProvider.theme('dark-orange')
            .backgroundPalette('orange').dark();
            $mdThemingProvider.theme('dark-purple')
            .backgroundPalette('deep-purple').dark();
            $mdThemingProvider.theme('dark-blue')
            .backgroundPalette('blue').dark();

        })
        .controller('AppCtrl',AppCtrl)
        .run(run);

    run.$inject = ['stateHandler', 'translationHandler'];

    function run(stateHandler, translationHandler) {
        stateHandler.initialize();
        translationHandler.initialize();
    }
