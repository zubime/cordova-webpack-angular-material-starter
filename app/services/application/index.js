import Application from './application.service.js';

var angular = require('angular');
    angular
        .module('gCompanyApp')
        .factory('ApplicationSvc', Application.factory);
