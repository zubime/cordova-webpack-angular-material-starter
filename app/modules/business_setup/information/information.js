var angular = require('angular');
import InformationComponent     from "./information.component.js";
import stateConfig from './information.state.js';
import  'angular-ui-router';
import  'ui-router-route-to-components';

const InformationModule = angular.module('business_setup.information',[
        'ui.router',
    'ui.router.components'
])
.component('informationTab',InformationComponent)
.config(stateConfig)
;

export default InformationModule;
