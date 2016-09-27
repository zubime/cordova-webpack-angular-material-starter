import angular from 'angular';
import ResourceDetailModule from './resource-detail.component.js';

const module = angular.module('resource-detail',[])
.component('resource-detail',ResourceDetailModule);

export default module;