'use strict';
import  'ngstorage';
import  'angular-dynamic-locale';
import  'angular-translate';
import  'angular-resource';
import  'ng-file-upload';
import  'angular-aria';
import  'angular-material/angular-material.css';
import  'material-design-icons';
import  'angular-animate';
import  'angular-messages';
import  'angular-material';
import  'angular-ui-router';
import  'ui-router-route-to-components';
import  stateConfig from './app.state.js';
import  config from './app-routes.js';
import  ComponentModule from './components';
import  BlocksModule from './blocks';
import  ServicesModule from './services';
import  BusinessSetupModule from './modules/business_setup/business_setup';
import  LocationModule from './modules/location/location'
import  BusinessLogicModule from './modules/modules'; 


require('./menu.less');
require('./main.less');
require ('svg-morpheus/compile/minified/svg-morpheus.js');


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
            'ui.router.components',
            'ngMdIcons',
            'ngAnimate',
            'status',
            ComponentModule.name,
            BlocksModule.name,
            ServicesModule.name,
            BusinessLogicModule.name
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
        .config(stateConfig)
        .config(config)
        .controller('AppCtrl',AppCtrl)
        .constant('VERSION', "0.0.1-SNAPSHOT")
        .constant('DEBUG_INFO_ENABLED', true)
        .run(run);


            // require("./layouts/navbar");
            // var navbarTemplate = require("ngtemplate!./layouts/navbar/navbar.html");




        require('./modules/status');
