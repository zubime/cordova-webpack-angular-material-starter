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
            'ui.router',
            'ngMdIcons',
            'ngAnimate'
        ])
        .config(function($mdThemingProvider,$mdIconProvider) {
          // $mdIconProvider
          //   .defaultIconSet('my/app/mdi.svg')
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

    run.$inject = ['stateHandler', 'translationHandler','$templateCache'];

    function run(stateHandler, translationHandler, $templateCache) {
        stateHandler.initialize();
        translationHandler.initialize();
        $templateCache.put('templateId.html', 'This is the content of the template');
    }
