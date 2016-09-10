'use strict';

require('./modules/status');

import AppCtrl from './app-controller.js'
import run from './app-run.js';

var angular = require('angular');
    angular
        .module('gCompanyApp', [
            'ngStorage',
            'tmh.dynamicLocale',
            'pascalprecht.translate',
            'ngResource',
            'ngAria',
            'ngFileUpload',
            'ngMaterial',
            'ui.router',
            'ngMdIcons',
            'ngAnimate',
            'status'
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
