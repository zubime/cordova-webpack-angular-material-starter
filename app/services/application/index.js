import Application from './application.service.js';

var angular = require('angular');
export default angular
        .module('services.application',[])
        .factory('ApplicationSvc', Application.factory);
