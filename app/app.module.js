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

        })
        .controller('AppCtrl',AppCtrl)
        .run(run);

    run.$inject = ['stateHandler', 'translationHandler'];

    function run(stateHandler, translationHandler) {
        stateHandler.initialize();
        translationHandler.initialize();
    }
