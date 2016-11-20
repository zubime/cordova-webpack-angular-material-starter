import angular from 'angular';
import ResourceComponent from "./resource.component.js";
import stateConfig from './resource.state.js';
import ResourceComponentsModule from './components/components';
import UiRouterComponentsModule from 'ui-router-route-to-components';
import  'angular-ui-router';
import  'ui-router-route-to-components';


const module = angular.module('business_setup.resource',[
    'ui.router',
    'ui.router.components',
    ResourceComponentsModule.name
])

.component('resourceTab',ResourceComponent)
.config(stateConfig);

export default module;
