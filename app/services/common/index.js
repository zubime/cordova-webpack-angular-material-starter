import Resource from './resource.service.js';
import ServiceDetails from './service-details.service.js';

var angular = require('angular');
export default angular.module('common',[])
.factory('Resource', Resource)
.factory('ServiceDetails', ServiceDetails)

        ;
