import angular from 'angular';
import ResourceComponent from "./resource.component.js";
import stateConfig from './resource.state.js';


const module = angular.module('business_setup.resource',[])
.component('resourceTab',ResourceComponent)
.config(stateConfig);

export default module;
